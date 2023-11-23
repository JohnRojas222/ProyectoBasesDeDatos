import BitacoraCrud from "@/app/services/BitacoraCrud";

export default async function bitacoras (req, res) {
    try {
        const crud = new BitacoraCrud();
        if (req.method == "GET") {
            const result = await crud.read().then((data) => data);
    
            return res.status(200).json(result);
        }
        return res.status(405).end();
    }
    catch(e) {
        console.log(e);
    }
}
