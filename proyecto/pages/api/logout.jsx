import LogOutCrud from "@/app/services/LogOutCrud";

export default async function logout (req, res) {
    try {
        if (req.method == "GET") {
        const { codigo, password } = req.query;
        
        const crud = new LogOutCrud();
        const result = await crud.logout().then((data) => data);
        return res.status(200).json(result);
        }
        return res.status(405).end();
    }
    catch(e) {
        console.log(e);
    }
}
