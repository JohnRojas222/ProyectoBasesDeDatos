import { Button, Form, InputGroup } from "react-bootstrap";
import "../../styles/tools.css"

export default function ProductsTools({handleShowAdd, handleShowDelete}) {
    return (
        <Form className="toolsBox">
            <Button variant="secondary" onClick={handleShowDelete}> Eliminar </Button>
            <Button onClick={handleShowAdd}> Añadir </Button>
            <InputGroup>
                <Form.Control name="search" type="search" placeholder="Buscar" />
                <Button> Buscar </Button>
            </InputGroup>
            <InputGroup>
                <Form.Control name="search" type="search" placeholder="Product EAN" />
                <Button> Editar </Button>
            </InputGroup>
        </Form>
    );
}