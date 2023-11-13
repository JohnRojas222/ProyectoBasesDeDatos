import ProductsTools from "../ProductsTools";
import TTable from "../TTable";
import AddForm from "../AddForm";
import useGetData from "@/app/hooks/useGetData";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useCreateData from "@/app/hooks/useCreateData";

export default function ProductsList() {
    const router = useRouter();
    const products = useGetData("/api/products");
    const [productsList, setProductsList] = useState(products);
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
        setProductsList(products);
    }, [products])

    const handleOnShowAdd = () => {
        setShowAddModal(!showAddModal);
    }

    const handleOnDelete = (ean) => {
        const products = productsList.filter((p) => p.EAN != ean);
        if (products.length != productsList.length) {
            setProductsList(products);
            toast.success("Exito!", {description:"Producto eliminado correctamente!"});
        }
        else {
            toast.error("Error!", {description:"Producto no encontrado!"});
        }
    }

    const handleOnAdd = async (product) => {
        setProductsList([...productsList, product]);
        handleOnShowAdd();
        const result = await useCreateData("/api/products", product);
        if (result) {
            toast.success("Exito!",{description:"Producto añadido correctamente!"});
        }
    }

    const handleOnSearch = (busqueda) => {
        setProductsList(productsList.filter((p) => p.EAN == busqueda));
    }

    const handleOnCancelSearch = () => {
        setProductsList(products);
    }

    const handleOnEdit = (ean) => {
        router.push("/" + ean);
    }

    return (
        <div className='productsList'>
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
            <h5> Productos </h5>
            <TTable list={productsList} maxHeight="54vh" />
        </div>
    );
}