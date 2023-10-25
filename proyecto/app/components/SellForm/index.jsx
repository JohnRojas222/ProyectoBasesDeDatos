"use client";
import { currentDate } from "@/app/functions/currentDate";
import { currentHour } from "@/app/functions/currentHour";
import { useGetCurrentUser } from "@/app/hooks/useGetCurrentUser";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useState } from "react";
import "../../styles/form.css";

export default function SellForm({ productsList }) {
    const currentUser = useGetCurrentUser();
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [amount, setAmount] = useState(0);
    const fechaActual = currentDate();
    const horaActual = currentHour();

    const handleOnSelect = (e) => {
        setSelectedProduct(e.target.value);
    }

    const handleOnChangeAmount = (e) => {
        setAmount(e.target.value);
    }

    const getSelectedProductPrice = () => {
        const product = productsList[selectedProduct];
        return product.precio;
    }

    return (
        <Form className="formBox">
            <h5> Vender </h5>
            <Form.Select name="producto" onChange={handleOnSelect}>
                {productsList.map((product, index) => (
                    <option key={index} value={product.id}>{product.producto}</option>
                ))}
            </Form.Select>
            <FloatingLabel controlId="cantidad" label="Cantidad" onChange={handleOnChangeAmount}>
                <Form.Control name="cantidad" type="number" placeholder="Cantidad" />
                
            </FloatingLabel>
            <Form.Text className="formText">
                Precio Producto: ₡{getSelectedProductPrice()}. Total: ₡{getSelectedProductPrice() * amount}. <br/>
                Fecha Actual: {fechaActual}. <br/>
                Hora Actual: {horaActual}.<br/>
                {currentUser && (
                    "Cajero: " + currentUser.nombre + " (" + currentUser.id + ")."
                )}
            </Form.Text>
            {currentUser && (
                <Form.Control name="cajero" defaultValue={currentUser.id} className="d-none"/>
            )}
            <Form.Control type="date" name="Fecha" defaultValue={fechaActual} className="d-none" />
            <Form.Control name="hora" defaultValue={horaActual} className="d-none" />
            <Button type="submit"> Vender </Button>
        </Form>
    );
}
