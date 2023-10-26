import { Button, Form, InputGroup } from "react-bootstrap";
import "../../styles/tools.css"
import { checkFields } from "@/app/functions/checkFields";

export default function ProductsTools({ handleShowAdd, handleOnDelete, handleOnSearch, 
    handleOnCancelSearch, handleOnEdit }) {

    const handleDelete = (e) => {
        if (checkFields(e)) {
            handleOnDelete(e.target.EAN.value);
        }
    }

    const handleSearch = (e) => {
        if (checkFields(e)) {
            handleOnSearch(e.target.busqueda.value);
        }
    }

    const handleEdit = (e) => {
        if (checkFields(e)) {
            handleOnEdit(e.target.EAN.value);
        }
    }

    return (
        <div className="toolsBox">
            <Button onClick={handleShowAdd}> Añadir </Button>
            <Form onSubmit={handleDelete}>
                <InputGroup className="text-white">
                    <Form.Control name="EAN" placeholder="EAN del Producto" />
                    <Button type="submit"> Eliminar </Button>
                </InputGroup>
            </Form>
            <Form onSubmit={handleSearch}>
                <InputGroup>
                    <Form.Control name="busqueda" type="search" placeholder="EAN del Producto" />
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