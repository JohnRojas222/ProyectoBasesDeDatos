import TModal from "../TModal";
import { FloatingLabel, Form } from "react-bootstrap";
import { checkFields } from "@/app/functions/checkFields";
import { getFormData } from "@/app/functions/getFormData";
import useGetData from "@/app/hooks/useGetData";
import { useState } from "react";

export default function AddForm({ type, handleShow, handleSubmit }) {
    const areas = useGetData("/api/areas");
    const [areaSelected, setAreaSelected] = useState();

    const handleOnSubmit = (e) => {
        if (checkFields(e)) {
            handleSubmit(getFormData(e));
        }
    }

    return (
        <TModal handleShow={handleShow} modalTitle="Añadir Producto" handleSubmit={handleOnSubmit}>
            <Form.Select className="mb-3" name="Area" onChange={(e) => setAreaSelected(e.target.value)}>
                {areas && areas.map((area, index) => (
                    <option key={index} value={area.CODIGO}>{area.DESCRIPCION}</option>
                ))}
            </Form.Select>
            {areaSelected && (
                <>
                    {areaSelected == "A004" && (
                        <FloatingLabel label="PLU">
                            <Form.Control name="PLU" placeholder="PLU" className="mb-3" />
                        </FloatingLabel>
                    )}
                    <FloatingLabel label="EAN">
                        <Form.Control name="EAN" placeholder="EAN" className="mb-3" />
                    </FloatingLabel>
                    <FloatingLabel label="Descripción">
                        <Form.Control name="Descripcion" placeholder="Descripción" className="mb-3" />
                    </FloatingLabel>
                    <FloatingLabel label="Peso">
                        <Form.Control name="Peso" type="number" placeholder="Peso" className="mb-3" />
                    </FloatingLabel>
                    <FloatingLabel label="Precio">
                        <Form.Control name="Precio" type="number" placeholder="Precio" className="mb-3" />
                    </FloatingLabel>
                    {areaSelected != "A004" && (
                        <FloatingLabel label="Cantidad">
                            <Form.Control name="Cantidad" type="number" placeholder="Cantidad" className="mb-3" />
                        </FloatingLabel>
                    )}
                </>
            )}
        </TModal>
    );
}
