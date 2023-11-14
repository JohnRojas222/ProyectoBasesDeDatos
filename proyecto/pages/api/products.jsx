import ProductosCrud from "@/app/services/ProductosCrud";

export default async function products (req, res) {
    try {
        const crud = new ProductosCrud();
        if (req.method == "GET") {
            const result = await crud.read().then((data) => data);
            return res.status(200).json(result);
        }
        else if (req.method == "POST") {
            const result = await crud.create(req.body).then((data) => data);
            return res.status(200).json(result);
        }
        else if (req.method == "PATCH") {
            const result = await crud.update(req.body.EAN, req.body).then((data) => data);
            return res.status(200).json(result);
        }
        else if (req.method == "DELETE") {
            const result = await crud.delete(req.body).then((data) => data);
            return res.status(200).json(result);
        }
        return res.status(405).end();
    }
    catch(e) {
        console.log(e);
    }
}