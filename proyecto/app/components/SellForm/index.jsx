import { checkFields } from "@/app/functions/checkFields";
import { getFormData } from "@/app/functions/getFormData";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { toast } from "sonner";

export default function SellForm({ list, handleSubmit, handleSellProducts }) {
    const [searchValue, setSearchValue] = useState("");
    const [currentProduct, setCurrentProduct] = useState("ninguno");
    const [currentPrice, setCurrentPrice] = useState(0);

    const handleOnSubmit = (e) => {
        if (checkFields(e)) {
            const data = getFormData(e);
            if (data.cantidad > 0) {
                handleSubmit(data);
            }
            else {
                toast("On no!", {description:"Por favor, ingrese una cantidad mayor a 0."});
            }
        }
    }

    const handleOnChangeSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const handleOnSearch = () => {
        if (searchValue == "") {
            toast("On no!", { description: "Por favor, ingrese un id de un producto." });
        }
        else {
            const product = list.find((p) => p.id == searchValue);
            if (product) {
                setCurrentProduct(product.producto);
                setCurrentPrice(product.precio);
                toast.success("Exito!", { description: "Producto encontrado." });
            }
            else {
                toast.error("Error!", { description: "Producto no encontrado." });
            }
        }
    }

    return (
        <Form style={{ width: "30vw" }} onSubmit={handleOnSubmit}>
            <h5 className="mb-3 text-white text-center"> Vender Productos </h5>
            <Form.Group className="text-white  mb-3">
                <Form.Label> Producto a Vender </Form.Label>
                <InputGroup className="text-white">
                    <Form.Control name="producto" placeholder="Id Producto" onChange={handleOnChangeSearch} />
                    <Button onClick={handleOnSearch}> Buscar </Button>
                </InputGroup>
                <Form.Text className="text-white"> Nombre: {currentProduct}. Precio: ₡{currentPrice}. </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 text-white">
                <Form.Label> Cantidad </Form.Label>
                <Form.Control name="cantidad" type="number" placeholder="Cantidad de Productos" />
            </Form.Group>
            <Button type="submit"> Añadir </Button>
            <Button className="ms-3" onClick={handleSellProducts}> Realizar la Venta </Button>
        </Form>
    );
}
