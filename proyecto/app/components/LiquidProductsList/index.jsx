import { useState } from "react";
import AddForm from "../AddForm";
import ProductsTools from "../ProductsTools";
import TTable from "../TTable";
import DeleteForm from "../DeleteForm";

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
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleOnShowAdd = () => {
        setShowAddModal(!showAddModal);
    }

    const handleOnShowDelete = () => {
        setShowDeleteModal(!showDeleteModal);
    }

    return (
        <div className='liquidProductsList'>
            <ProductsTools handleShowAdd={handleOnShowAdd} handleShowDelete={handleOnShowDelete}/>
            {showAddModal && (
                <AddForm handleShow={handleOnShowAdd}  type="Liquid"/>
            )}
            {showDeleteModal && (
                <DeleteForm handleShow={handleOnShowDelete}/>
            )}
            <h5> Liquidos </h5>
            <TTable list={FAKE_LIQUID_LIST} />
        </div>
    );
}
