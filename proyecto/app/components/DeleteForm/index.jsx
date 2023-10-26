import { FloatingLabel, Form } from "react-bootstrap";
import TModal from "../TModal";

export default function DeleteForm({ handleShow }) {
    return (
        <TModal handleShow={handleShow} modalTitle="Eliminar Producto">
            <Form>
                <FloatingLabel label="Product EAN" className="mb-3"> 
                    <Form.Control placeholder="Product EAN"/>
                </FloatingLabel>
            </Form>
        </TModal>
    );
}
