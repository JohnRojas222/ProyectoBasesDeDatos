"use client";
import { useState } from "react";
import AddForm from "../AddForm";
import ProductsTools from "../ProductsTools";
import TTable from "../TTable";
import DeleteForm from "../DeleteForm";
import { toast } from "sonner";

const FAKE_LIQUID_LIST = [
    {
        PLU: 1111,
        EAN: 543210987654321,
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
        EAN: 123456789012346,
        descripcion: "Aceite",
        pesoEnKilos: 175,
        precioPorKilogramo: 5000,
    },
]


export default function LiquidProductsList() {
    const [liquidList, setLiquidList] = useState(FAKE_LIQUID_LIST);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleOnShowAdd = () => {
        setShowAddModal(!showAddModal);
    }

    const handleOnShowDelete = () => {
        setShowDeleteModal(!showDeleteModal);
    }

    const handleOnDelete = (ean) => {
        const products = liquidList.filter((p) => p.EAN != ean);
        if (products.length != liquidList.length) {
            setLiquidList(products);
            handleOnShowDelete();
            toast.success("Exito!", {description:"Producto eliminado correctamente!"});
        }
        else {
            toast.error("Error!", {description:"Producto no encontrado!"});
        }
    }

    const handleOnAdd = (product) => {
        setLiquidList([...liquidList, product]);
        handleOnShowAdd();
        toast.success("Exito!",{description:"Producto añadido correctamente!"});
    }

    return (
        <div className='liquidProductsList'>
            <ProductsTools handleShowAdd={handleOnShowAdd} handleShowDelete={handleOnShowDelete}/>
            {showAddModal && (
                <AddForm handleShow={handleOnShowAdd} handleSubmit={handleOnAdd} type="Liquid"/>
            )}
            {showDeleteModal && (
                <DeleteForm handleShow={handleOnShowDelete} handleSubmit={handleOnDelete}/>
            )}
            <h5> Liquidos </h5>
            <TTable list={liquidList} />
        </div>
    );
}
