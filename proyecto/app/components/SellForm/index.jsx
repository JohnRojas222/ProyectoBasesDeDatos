import { checkFields } from "@/app/functions/checkFields";
import { getFormData } from "@/app/functions/getFormData";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { toast } from "sonner";

export default function SellForm({ list = [], handleSubmit, handleSellProducts }) {
    const [searchValue, setSearchValue] = useState("");
    const [currentProduct, setCurrentProduct] = useState();

    const handleOnSubmit = (e) => {
        if (checkFields(e)) {
            const data = getFormData(e);
            if (data.cantidad > 0) {
                handleSubmit(data);
            }
            else {
                toast("On no!", { description: "Por favor, ingrese una cantidad mayor a 0." });
            }
        }
    }

    const handleOnChangeSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const handleOnSearch = () => {
        if (searchValue == "") {
            toast("On no!", { description: "Por favor, ingrese el EAN de un producto." });
        }
        else {
            const product = list.find((p) => p.EAN == searchValue);
            if (product) {
                setCurrentProduct(product);
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
                    <Form.Control
                        name="EAN"
                        placeholder="EAN del Producto"
                        onChange={handleOnChangeSearch}
                        type="search"
                    />
                    <Button onClick={handleOnSearch}> Buscar </Button>
                </InputGroup>
                <Form.Text className="text-white">
                    {currentProduct && (
                        <>
                            Nombre: {currentProduct.DESCRIPCION}. Precio: ₡{currentProduct.PRECIO}. <br />
                            {currentProduct.AREA != "A004" ? "Cantidad Disponible: " + currentProduct.CANTIDAD : ""}
                        </>
                    )}
                </Form.Text>
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
