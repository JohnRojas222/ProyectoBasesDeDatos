import { useState } from "react";
import ProductsTools from "../ProductsTools";
import TTable from "../TTable";
import AddForm from "../AddForm";
import DeleteForm from "../DeleteForm";

const FAKE_LIST = [
    {
        EAN: 123456789012345,
        descripcion: "Arroz",
        pesoEnGramos: 100,
        precioPorUnidad: 3000,
        cantidad: 50,
    },
    {
        EAN: 987654321098765,
        descripcion: "Frijoles",
        pesoEnGramos: 150,
        precioPorUnidad: 4000,
        cantidad: 70,
    },
    {
        EAN: 543210987654321,
        descripcion: "Aceite",
        pesoEnGramos: 175,
        precioPorUnidad: 5000,
        cantidad: 20,
    },
]

export default function SolidProductsList() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleOnShowAdd = () => {
        setShowAddModal(!showAddModal);
    }

    const handleOnShowDelete = () => {
        setShowDeleteModal(!showDeleteModal);
    }

    return (
        <div className='solidProductsList'>
            <ProductsTools handleShowAdd={handleOnShowAdd} handleShowDelete={handleOnShowDelete}/>
            {showAddModal && (
                <AddForm handleShow={handleOnShowAdd}/>
            )}
            {showDeleteModal && (
                <DeleteForm handleShow={handleOnShowDelete}/>
            )}
            <h5> Solidos </h5>
            <TTable list={FAKE_LIST} />
        </div>
    );
}