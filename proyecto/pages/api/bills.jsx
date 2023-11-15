import FacturaCrud from "@/app/services/FacturaCrud";

export default async function bills (req, res) {
    try {
        const crud = new FacturaCrud();
        if (req.method == "GET") {
            const result = await crud.read().then((data) => data);
            return res.status(200).json(result);
        }
        else if (req.method == "POST") {
            const result = await crud.create(req.body).then((data) => data);
            return res.status(200).json(result);
        }
        return res.status(405).end();
    }
    catch(e) {
        console.log(e);
    }
}
