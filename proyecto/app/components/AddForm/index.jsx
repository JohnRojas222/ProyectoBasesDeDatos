import { FloatingLabel, Form } from "react-bootstrap";
import TModal from "../TModal";

const FAKE_AREA_LIST = [
    {
        id: 111,
        nombre: "Abarrotes",
    },
    {
        id: 222,
        nombre: "Cuidado Personal",
    },
    {
        id: 333,
        nombre: "Mercancías",
    },
]

export default function AddForm({ type, handleShow }) {

    if (type == "Liquid") {
        return (
            <TModal handleShow={handleShow} modalTitle="Añadir Producto">
                <Form>
                    <FloatingLabel label="PLU">
                        <Form.Control placeholder="PLU" className="mb-3" />
                    </FloatingLabel>
                    <FloatingLabel label="EAN">
                        <Form.Control placeholder="EAN" className="mb-3" />
                    </FloatingLabel>
                    <FloatingLabel label="Descripción">
                        <Form.Control placeholder="Descripción" className="mb-3" />
                    </FloatingLabel>
                    <FloatingLabel label="Peso en Kilogramos">
                        <Form.Control type="number" placeholder="Peso en Gramos" className="mb-3" />
                    </FloatingLabel>
                    <FloatingLabel label="Precio por Kilogramos">
                        <Form.Control type="number" placeholder="Precio por Unidad" className="mb-3" />
                    </FloatingLabel>
                </Form>
            </TModal>
        );
    }

    return (
        <TModal handleShow={handleShow} modalTitle="Añadir Producto">
            <Form>
                <FloatingLabel label="EAN">
                    <Form.Control placeholder="EAN" className="mb-3" />
                </FloatingLabel>
                <FloatingLabel label="Descripción">
                    <Form.Control placeholder="Descripción" className="mb-3" />
                </FloatingLabel>
                <FloatingLabel label="Peso en Gramos">
                    <Form.Control type="number" placeholder="Peso en Gramos" className="mb-3" />
                </FloatingLabel>
                <FloatingLabel label="Precio por Unidad">
                    <Form.Control type="number" placeholder="Precio por Unidad" className="mb-3" />
                </FloatingLabel>
                <FloatingLabel label="Cantidad">
                    <Form.Control type="number" placeholder="Cantidad" className="mb-3" />
                </FloatingLabel>
                <Form.Select className="mb-3" >
                    {FAKE_AREA_LIST.map((area, index) => (
                        <option key={index} value={area.id}>{area.nombre}</option>
                    ))}
                </Form.Select>
            </Form>
        </TModal>
    );
}