import AreaCrud from "@/app/services/AreaCrud";

export default async function areas (req, res) {
    try {
        const crud = new AreaCrud();
        if (req.method == "GET") {
            const result = await crud.read().then((data) => data);
            return res.status(200).json(result);
        }
        else if (req.method == "PATCH") {
            const result = await crud.update(req.body.Codigo, req.body).then((data) => data);
            return res.status(200).json(result);
        }
        return res.status(405).end();
    }
    catch(e) {
        console.log(e);
    }
}
