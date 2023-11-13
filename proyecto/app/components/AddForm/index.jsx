import TModal from "../TModal";
import { FloatingLabel, Form } from "react-bootstrap";
import { checkFields } from "@/app/functions/checkFields";
import { getFormData } from "@/app/functions/getFormData";
import useGetData from "@/app/hooks/useGetData";

export default function AddForm({ type, handleShow, handleSubmit }) {
    const areas = useGetData("/api/areas");

    const handleOnSubmit = (e) => {
        if (checkFields(e)) {
            handleSubmit(getFormData(e));
        }
    }

    return (
        <TModal handleShow={handleShow} modalTitle="Añadir Producto" handleSubmit={handleOnSubmit}>
            <FloatingLabel label="PLU">
                <Form.Control name="PLU" placeholder="PLU" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel label="EAN">
                <Form.Control name="EAN" placeholder="EAN" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel label="Descripción">
                <Form.Control name="DESCRIPCION" placeholder="Descripción" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel label="Peso">
                <Form.Control name="PESO" type="number" placeholder="Peso" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel label="Precio">
                <Form.Control name="PRECIO" type="number" placeholder="Precio" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel label="Cantidad">
                <Form.Control name="CANTIDAD" type="number" placeholder="Cantidad" className="mb-3" />
            </FloatingLabel>
            <Form.Select className="mb-3" name="AREA">
                {areas && areas.map((area, index) => (
                    <option key={index} value={area.CODIGO}>{area.DESCRIPCION}</option>
                ))}
            </Form.Select>
        </TModal>
    );
}
