import { Button, Form, InputGroup } from "react-bootstrap";
import "../../styles/tools.css"

export default function ProductsTools() {
    return (
        <Form className="toolsBox">
            <Button variant="secondary"> Eliminar </Button>
            <Button> Añadir </Button>
            <InputGroup>
                <Form.Control name="search" type="search" placeholder="Buscar" />
                <Button> Buscar </Button>
            </InputGroup>
        </Form>
    );
}