import MovimientoCrud from "@/app/services/MovimientoCrud";

export default async function movimientos (req, res) {
    try {
        const crud = new MovimientoCrud();
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
