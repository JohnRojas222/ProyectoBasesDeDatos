import CajeroCrud from "@/app/services/CajeroCrud";

export default async function boxes (req, res) {
    try {
        const crud = new CajeroCrud();
        const result = await crud.read().then((data) => data);
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
    }
}
