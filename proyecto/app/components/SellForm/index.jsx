import { checkFields } from "@/app/functions/checkFields";
import { getFormData } from "@/app/functions/getFormData";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { toast } from "sonner";

const FAKE_LIQUID_LIST = [
    {
        EAN: 4567891230123,
        PLU: 1111,
    },
]

const FAKE_SOLID_LIST = [
    {
        EAN: 1234567891230,
        cantidad: 10,
    },
    {
        EAN: 2345678912301,
        cantidad: 20,
    },
    {
        EAN: 3456789123012,
        cantidad: 30,
    },
]

export default function SellForm({ list, handleSubmit, handleSellProducts }) {
    const [searchValue, setSearchValue] = useState("");
    const [currentProduct, setCurrentProduct] = useState("ninguno");

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

    const getPLU = (ean) => {
        return FAKE_LIQUID_LIST.find((p) => p.EAN == ean).PLU;
    }

    const getAmount = (ean) => {
        const product = FAKE_SOLID_LIST.find((p) => p.EAN == ean);
        if (product) return product.cantidad;
        return 0;
    }

    return (
        <Form style={{ width: "30vw" }} onSubmit={handleOnSubmit}>
            <h5 className="mb-3 text-white text-center"> Vender Productos </h5>
            <Form.Group className="text-white  mb-3">
                <Form.Label> Producto a Vender </Form.Label>
                <InputGroup className="text-white">
                    <Form.Control name="EAN" placeholder="EAN del Producto" onChange={handleOnChangeSearch} />
                    <Button onClick={handleOnSearch}> Buscar </Button>
                </InputGroup>
                <Form.Text className="text-white">
                    Nombre: {currentProduct.descripcion}. Precio: ₡{currentProduct.precio}.
                    {currentProduct.area == "frescos" ? " PLU: " + getPLU(currentProduct.EAN) + "." : ""}
                    {currentProduct.area != "frescos" ? " Cantidad Disponible: " + getAmount(currentProduct.EAN) + "." : ""}
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
