import SellForm from "../SellForm";
import TTable from "../TTable";
import { useState } from "react";
import { toast } from "sonner";
import "../../styles/sell.css"
import SellTools from "../SellTools";
import TModal from "../TModal";
import FacturaForm from "../FacturaForm";
import { formatedCamelCase } from "@/app/functions/formatedCamelCase";
import { titleCase } from "@/app/functions/titleCase";
import { checkFields } from "@/app/functions/checkFields";

const FAKE_PRODUCTS_LIST = [
    {
        EAN: 1234567891230,
        descripcion: "Arroz",
        area: "abarrotes",
        precio: 5000,
        peso: 5,
    },
    {
        EAN: 2345678912301,
        descripcion: "Jabón",
        area: "cuidado Personal",
        precio: 2000,
        peso: 2.5,
    },
    {
        EAN: 3456789123012,
        descripcion: "Camisa Roja",
        area: "mercancías",
        precio: 3000,
        peso: 2,
    },
    {
        EAN: 4567891230123,
        descripcion: "Coca Cola",
        area: "frescos",
        precio: 1500,
        peso: 3,
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

const WEIGHT_FORMAT = {
    frescos: "gr",
    abarrotes: "kg",
    mercancías: "kg",
    cuidadoPersonal: "kg",
}

const AMOUNT_FORMAT = {
    frescos: "litros",
    abarrotes: "unidades",
    mercancías: "unidades",
    cuidadoPersonal: "unidades",
}

export default function Sell() {
    const [productsToSell, setProductsToSell] = useState([]);
    const [formatedList, setFormatedList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleOnSubmit = (e) => {
        if (checkFields(e)) {
            handleOnShow();
            toast.success("Exito!", {description: "Productos vendidos correctamente!"});
        }
    }

    const handleOnShow = () => {
        if (productsToSell.length > 0) {
            setShowModal(!showModal);
        }
        else {
            toast("Oh no!", {description: "Aun no hay productos ingresados."});
        }
    }

    const handleOnAddProduct = (product) => {
        const newProduct = FAKE_PRODUCTS_LIST.filter((p) => p.EAN == product.EAN)[0];
        if (newProduct) {
            const checkIfItIs = productsToSell.some((p) => p.EAN == product.EAN);
            if (newProduct.area != "frescos" && getAmount(newProduct.EAN) < product.cantidad) {
                toast("Oh no!", { description: "No hay suficientes unidades del producto." });
            }
            else if (!checkIfItIs) {
                setFormatedList([...formatedList, {
                    EAN: newProduct.EAN,
                    descripcion: newProduct.descripcion,
                    area: titleCase(newProduct.area),
                    precio: "₡" + newProduct.precio,
                    peso: newProduct.peso + " " + WEIGHT_FORMAT[formatedCamelCase(newProduct.area)],
                    cantidad: product.cantidad + " " + AMOUNT_FORMAT[formatedCamelCase(newProduct.area)],
                    precioTotal: "₡" + newProduct.precio * product.cantidad,
                }]);
                setProductsToSell([...productsToSell, {
                    ...newProduct, 
                    cantidad: product.cantidad,
                    precioTotal: newProduct.precio * product.cantidad,
                }]);
            }
            else {
                toast("Oh no!", { description: "Producto ya ingresado." });
            }
        }
        else {
            toast("Oh no!", { description: "Producto no encontrado." });
        }
    }

    const handleOnDeleteProduct = (ean) => {
        setProductsToSell(productsToSell.filter((p) => p.EAN != ean));
        setFormatedList(formatedList.filter((p) => p.EAN != ean));
    }

    const getAmount = (ean) => {
        const product = FAKE_SOLID_LIST.find((p) => p.EAN == ean);
        if (product) return product.cantidad;
        return 0;
    }
    return (
        <div className="sellBox">
            <SellForm list={FAKE_PRODUCTS_LIST} handleSubmit={handleOnAddProduct} handleSellProducts={handleOnShow} />
            {productsToSell.length > 0 && (
                <>
                    <SellTools handleOnDelete={handleOnDeleteProduct} />
                    <TTable list={formatedList} maxWidth="50vw" />
                </>
            )}
            {showModal && (
                <TModal handleShow={handleOnShow} modalTitle="Factura" handleSubmit={handleOnSubmit}>
                    <FacturaForm productsToSell={productsToSell}/>
                </TModal>
            )}
        </div>
    );
}
