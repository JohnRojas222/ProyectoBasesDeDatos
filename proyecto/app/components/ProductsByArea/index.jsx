import TTable from "../TTable";
import ProductsByAreaTools from "../ProductsByAreaTools";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGetCurrentUser } from "@/app/hooks/useGetCurrentUser";
import "../../styles/productsByArea.css";
import { toast } from "sonner";

const FAKE_LIST = [
    {
        EAN: 123456789012345,
        descripcion: "Arroz",
        pesoEnGramos: 100,
        precioPorUnidad: 3000,
        cantidad: 50,
        area: "Abarrotes",
    },
    {
        EAN: 987654321098765,
        descripcion: "Frijoles",
        pesoEnGramos: 150,
        precioPorUnidad: 4000,
        cantidad: 70,
        area: "Cuidado Personal",
    },
    {
        EAN: 543210987654321,
        descripcion: "Aceite",
        pesoEnGramos: 175,
        precioPorUnidad: 5000,
        cantidad: 20,
        area: "Mercancías",
    },
]

const FAKE_LIQUID_LIST = [
    {
        PLU: 1111,
        EAN: 883210987654321,
        descripcion: "Arroz",
        pesoEnKilos: 100,
        precioPorKilogramo: 3000,
        area: "Frescos"
    },
    {
        PLU: 2222,
        EAN: 76543210987654,
        descripcion: "Frijoles",
        pesoEnKilos: 150,
        precioPorKilogramo: 4000,
        area: "Frescos"
    },
    {
        PLU: 3333,
        EAN: 223456789012346,
        descripcion: "Aceite",
        pesoEnKilos: 175,
        precioPorKilogramo: 5000,
        area: "Frescos"
    },
]

export default function ProductsByArea() {
    const router = useRouter();
    const currentUser = useGetCurrentUser();
    const [solidList, setSolidList] = useState([]);

    useEffect(() => {
        if (currentUser) {
            let newList = FAKE_LIST.filter((p) => p.area == currentUser.area);
            if (newList.length <= 0) {
                newList = FAKE_LIQUID_LIST;
            }
            setSolidList(newList);
        }
    }, [currentUser]);

    const handleOnSearch = (data) => {
        let newList = [];
        if (data.filtro == "EAN") {
            newList = [...FAKE_LIST.filter((p) => p.EAN == data.busqueda), 
                ...FAKE_LIQUID_LIST.filter((p) => p.EAN == data.busqueda)];
        }
        else {
            newList = [...FAKE_LIST.filter((p) => p.descripcion == data.busqueda), 
                ...FAKE_LIQUID_LIST.filter((p) => p.descripcion == data.busqueda)];
        }
        setSolidList(newList);
    }

    const handleOnCancelSearch = () => {
        setSolidList(FAKE_LIST.filter((p) => p.area == currentUser.area));
    }

    const handleOnEdit = (ean) => {
        const product = [...FAKE_LIST.filter((p) => p.EAN == ean),
            ...FAKE_LIQUID_LIST.filter((p) => p.EAN == ean)][0];
        if (product.area == currentUser.area) {
            router.push("/" + ean);
        }
        else {
            toast.error("Error!", {description:"No tiene permitido editar ese producto!"});
        }
    }

    return (
        <div className='productsList'>
            <ProductsByAreaTools
                handleOnSearch={handleOnSearch}
                handleOnCancelSearch={handleOnCancelSearch}
                handleOnEdit={handleOnEdit}
            />
            <h5> {currentUser ? currentUser.area : ""} </h5>
            <TTable list={solidList} maxHeight="54vh" />
        </div>
    );
}
