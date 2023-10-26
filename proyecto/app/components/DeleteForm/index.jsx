"use client";
import { FloatingLabel, Form } from "react-bootstrap";
import TModal from "../TModal";
import { checkFields } from "@/app/functions/checkFields";

export default function DeleteForm({ handleShow, handleSubmit }) {

    const handleOnSubmit = (e) => {
        if (checkFields(e)) {
            handleSubmit(e.target.EAN.value);
        }
    }

    return (
        <TModal handleShow={handleShow} modalTitle="Eliminar Producto" handleSubmit={handleOnSubmit}>
            <FloatingLabel label="Product EAN" className="mb-3">
                <Form.Control name="EAN" placeholder="Product EAN"/>
            </FloatingLabel>
        </TModal>
    );
}
