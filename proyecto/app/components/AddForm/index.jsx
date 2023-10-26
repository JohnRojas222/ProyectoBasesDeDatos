import TModal from "../TModal";
import { FloatingLabel, Form } from "react-bootstrap";
import { checkFields } from "@/app/functions/checkFields";
import { getFormData } from "@/app/functions/getFormData";

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

export default function AddForm({ type, handleShow, handleSubmit }) {

    const handleOnSubmit = (e) => {
        if (checkFields(e)) {
            handleSubmit(getFormData(e));
        }
    }

    if (type == "Liquid") {
        return (
            <TModal handleShow={handleShow} modalTitle="Añadir Producto" handleSubmit={handleOnSubmit}>
                <FloatingLabel label="PLU">
                    <Form.Control name="PLU" placeholder="PLU" className="mb-3" />
                </FloatingLabel>
                <FloatingLabel label="EAN">
                    <Form.Control name="EAN" placeholder="EAN" className="mb-3" />
                </FloatingLabel>
                <FloatingLabel label="Descripción">
                    <Form.Control name="descripcion" placeholder="Descripción" className="mb-3" />
                </FloatingLabel>
                <FloatingLabel label="Peso en Kilogramos">
                    <Form.Control name="pesoEnKilos" type="number" placeholder="Peso en Kilogramos" className="mb-3" />
                </FloatingLabel>
                <FloatingLabel label="Precio por Kilogramos">
                    <Form.Control name="precioPorKilogramo" type="number" placeholder="Precio por Kilogramo" className="mb-3" />
                </FloatingLabel>
            </TModal>
        );
    }

    return (
        <TModal handleShow={handleShow} modalTitle="Añadir Producto" handleSubmit={handleOnSubmit}>
            <FloatingLabel label="EAN">
                <Form.Control name="EAN" placeholder="EAN" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel label="Descripción">
                <Form.Control name="descripcion" placeholder="Descripción" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel label="Peso en Gramos">
                <Form.Control name="pesoEnGramos" type="number" placeholder="Peso en Gramos" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel label="Precio por Unidad">
                <Form.Control name="precioPorUnidad" type="number" placeholder="Precio por Unidad" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel label="Cantidad">
                <Form.Control name="cantidad" type="number" placeholder="Cantidad" className="mb-3" />
            </FloatingLabel>
            <Form.Select className="mb-3" name="area">
                {FAKE_AREA_LIST.map((area, index) => (
                    <option key={index} value={area.id}>{area.nombre}</option>
                ))}
            </Form.Select>
        </TModal>
    );
}
