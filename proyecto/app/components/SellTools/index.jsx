import { checkFields } from "@/app/functions/checkFields";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function SellTools({ handleOnDelete }) {

    const handleDelete = (e) => {
        if (checkFields(e)) {
            handleOnDelete(e.target.producto.value);
        }
    }

    return (
        <div className="sellToolsBox">
            <Form onSubmit={handleDelete}>
                <InputGroup className="text-white">
                    <Form.Control name="producto" placeholder="Id Producto"/>
                    <Button type="submit"> Eliminar </Button>
                </InputGroup>
            </Form>
        </div>
    );
}
