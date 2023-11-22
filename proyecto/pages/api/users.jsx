import UsuariosCrud from "@/app/services/UsuariosCrud";

export default async function users (req, res) {
    try {
        if (req.method == "GET") {
        const { codigo, password } = req.query;
        
        // Utilizar los parámetros como sea necesario en tu lógica
        const crud = new UsuariosCrud();
        const result = await crud.read(codigo, password).then((data) => data);
        return res.status(200).json(result);
        }
        return res.status(405).end();
    }
    catch(e) {
        console.log(e);
    }
}
