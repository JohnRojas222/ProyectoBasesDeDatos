import UsuariosCrud from "@/app/services/UsuariosCrud";

export default async function users (req, res) {
    try {
        const crud = new UsuariosCrud();
        const result = await crud.read().then((data) => data);
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
    }
}
