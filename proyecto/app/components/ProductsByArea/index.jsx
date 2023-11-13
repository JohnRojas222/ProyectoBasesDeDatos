import TTable from "../TTable";
import useGetData from "@/app/hooks/useGetData";
import ProductsByAreaTools from "../ProductsByAreaTools";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGetCurrentUser } from "@/app/hooks/useGetCurrentUser";
import { toast } from "sonner";
import "../../styles/productsByArea.css";

export default function ProductsByArea() {
    const router = useRouter();
    const currentUser = useGetCurrentUser();
    const products = useGetData("/api/products");
    const [solidList, setSolidList] = useState([]);

    useEffect(() => {
        if (currentUser && products) {
            setSolidList(products.filter((p) => p.AREA == currentUser.AREA));
        }
    }, [currentUser, products]);

    const handleOnSearch = (data) => {
        let newList = [];
        if (data.filtro == "EAN") {
            newList = products.filter((p) => p.EAN == data.busqueda);
        }
        else {
            newList = products.filter((p) => p.DESCRIPCION == data.busqueda);
        }
        setSolidList(newList);
    }

    const handleOnCancelSearch = () => {
        setSolidList(products.filter((p) => p.AREA == currentUser.AREA));
    }

    const handleOnEdit = (ean) => {
        const product = products.find((p) => p.EAN == ean);
        if (product.AREA == currentUser.AREA) {
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
            <h5> {currentUser ? currentUser.AREA : ""} </h5>
            <TTable list={solidList} maxHeight="54vh" />
        </div>
    );
}
