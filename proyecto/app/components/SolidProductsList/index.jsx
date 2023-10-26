import { useState } from "react";
import ProductsTools from "../ProductsTools";
import TTable from "../TTable";
import AddForm from "../AddForm";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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

export default function SolidProductsList() {
    const router = useRouter();
    const [solidList, setSolidList] = useState(FAKE_LIST);
    const [showAddModal, setShowAddModal] = useState(false);

    const handleOnShowAdd = () => {
        setShowAddModal(!showAddModal);
    }

    const handleOnDelete = (ean) => {
        const products = solidList.filter((p) => p.EAN != ean);
        if (products.length != solidList.length) {
            setSolidList(products);
            toast.success("Exito!", {description:"Producto eliminado correctamente!"});
        }
        else {
            toast.error("Error!", {description:"Producto no encontrado!"});
        }
    }

    const handleOnAdd = (product) => {
        setSolidList([...solidList, product]);
        handleOnShowAdd();
        toast.success("Exito!",{description:"Producto añadido correctamente!"});
    }

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
            <ProductsTools
                handleShowAdd={handleOnShowAdd}
                handleOnDelete={handleOnDelete}
                handleOnSearch={handleOnSearch}
                handleOnCancelSearch={handleOnCancelSearch}
                handleOnEdit={handleOnEdit}
            />
            {showAddModal && (
                <AddForm handleShow={handleOnShowAdd} handleSubmit={handleOnAdd}/>
            )}
            <h5> Solidos </h5>
            <TTable list={solidList} maxHeight="54vh" />
        </div>
    );
}