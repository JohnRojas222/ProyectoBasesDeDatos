import { useState } from "react";
import { toast } from "sonner";
import { titleCase } from "@/app/functions/titleCase";
import { checkFields } from "@/app/functions/checkFields";
import useGetData from "@/app/hooks/useGetData";
import SellForm from "../SellForm";
import SellTools from "../SellTools";
import TTable from "../TTable";
import TModal from "../TModal";
import FacturaForm from "../FacturaForm";
import "../../styles/sell.css";
import { getFormData } from "@/app/functions/getFormData";
import useCreateData from "@/app/hooks/useCreateData";

const WEIGHT_FORMAT = {
    A001: "gr",
    A002: "kg",
    A003: "kg",
    A004: "kg",
}

const AMOUNT_FORMAT = {
    A001: "litros",
    A002: "unidades",
    A003: "unidades",
    A004: "unidades",
}

export default function Sell() {
    const products = useGetData("/api/products");
    const [productsToSell, setProductsToSell] = useState([]);
    const [formatedList, setFormatedList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleOnSubmit = (e) => {
        if (checkFields(e)) {
            const billData = getFormData(e);
            productsToSell.map(async (product) => {
                const newBill = {
                    Producto: product.EAN,
                    Cantidad: product.cantidad,
                    SubTotal: product.PRECIO,
                    Total: product.precioTotal,
                    Cajero: billData.Usuario,
                    Fecha: billData.Fecha,
                    Hora: billData.Hora,
                }
                const result = await useCreateData("/api/bills", newBill);
            })
            setProductsToSell([]);
            setFormatedList([]);
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
        const newProduct = products.find((p) => p.EAN == product.EAN);
        if (newProduct) {
            const checkIfItIs = productsToSell.some((p) => p.EAN == product.EAN);
            if (getAmount(newProduct.EAN) < product.cantidad) {
                toast("Oh no!", { description: "No hay suficientes unidades del producto." });
            }
            else if (!checkIfItIs) {
                setFormatedList([...formatedList, {
                    PLU: newProduct.PLU,
                    EAN: newProduct.EAN,
                    descripcion: newProduct.DESCRIPCION,
                    area: titleCase(newProduct.AREA),
                    precio: "₡" + newProduct.PRECIO,
                    peso: newProduct.PESO + " " + WEIGHT_FORMAT[newProduct.AREA],
                    cantidad: product.cantidad + " " + AMOUNT_FORMAT[newProduct.AREA],
                    precioTotal: "₡" + newProduct.PRECIO * product.cantidad,
                }]);
                setProductsToSell([...productsToSell, {
                    ...newProduct, 
                    cantidad: product.cantidad,
                    precioTotal: newProduct.PRECIO * product.cantidad,
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
        const product = products.find((p) => p.EAN == ean);
        if (product) return product.cantidad;
        return 0;
    }

    return (
        <div className="sellBox">
            <SellForm list={products} handleSubmit={handleOnAddProduct} handleSellProducts={handleOnShow} />
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
