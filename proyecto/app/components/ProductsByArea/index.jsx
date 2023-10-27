import TTable from "../TTable";
import ProductsByAreaTools from "../ProductsByAreaTools";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGetCurrentUser } from "@/app/hooks/useGetCurrentUser";

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
    },
    {
        PLU: 2222,
        EAN: 76543210987654,
        descripcion: "Frijoles",
        pesoEnKilos: 150,
        precioPorKilogramo: 4000,
    },
    {
        PLU: 3333,
        EAN: 223456789012346,
        descripcion: "Aceite",
        pesoEnKilos: 175,
        precioPorKilogramo: 5000,
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

    const handleOnSearch = (busqueda) => {
        setSolidList(solidList.filter((p) => p.EAN == busqueda));
    }

    const handleOnCancelSearch = () => {
        setSolidList(FAKE_LIST);
    }

    const handleOnEdit = (ean) => {
        router.push("/" + ean);
    }

    return (
        <div className='solidProductsList'>
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
