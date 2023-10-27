import { Button, Form, InputGroup } from "react-bootstrap";
import { checkFields } from "@/app/functions/checkFields";
import { getFormData } from "@/app/functions/getFormData";
import "../../styles/tools.css"

export default function ProductsByAreaTools({ handleOnSearch, handleOnCancelSearch, handleOnEdit }) {

    const handleSearch = (e) => {
        if (checkFields(e)) {
            handleOnSearch(getFormData(e));
        }
    }

    const handleEdit = (e) => {
        if (checkFields(e)) {
            handleOnEdit(e.target.EAN.value);
        }
    }

    return (
        <div className="toolsBox">
            <Form onSubmit={handleSearch}>
                <Form.Select name="filtro">
                    <option key={0} value={"EAN"}> EAN </option>
                    <option key={1} value={"Descripción"}> Descripción </option>
                </Form.Select>
                <InputGroup>
                    <Form.Control name="busqueda" type="search" placeholder="Buscar" />
                    <Button type="submit"> Buscar </Button>
                    <Button variant="danger" onClick={handleOnCancelSearch}> X </Button>
                </InputGroup>
            </Form>
            <Form onSubmit={handleEdit}>
                <InputGroup>
                    <Form.Control name="EAN" type="search" placeholder="EAN del Producto" />
                    <Button type="submit"> Editar </Button>
                </InputGroup>
            </Form>
        </div>

    );
}
