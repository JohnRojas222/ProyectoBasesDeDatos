import SellForm from "../SellForm";
import TTable from "../TTable";
import { useState } from "react";
import { toast } from "sonner";
import "../../styles/sell.css"
import SellTools from "../SellTools";
import TModal from "../TModal";
import FacturaForm from "../FacturaForm";

const FAKE_LIST = [
    {
        id: 111,
        producto: "Arroz",
        precio: 3000,
    },
    {
        id: 222,
        producto: "Frijoles",
        precio: 4000,
    },
    {
        id: 333,
        producto: "Aceite",
        precio: 5000,
    },
]

export default function Sell() {
    
    const [productsToSell, setProductsToSell] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleOnShow = () => {
        setShowModal(!showModal);
    }

    const handleOnAddProduct = (product) => {
        const newProduct = FAKE_LIST.find((p) => p.id == product.producto);
        if (newProduct) {
            const checkIfItIs = productsToSell.some((p) => p.id == product.producto);
            if (!checkIfItIs) {
                setProductsToSell([...productsToSell, {
                    ...newProduct, cantidad: product.cantidad,
                    precioTotal: product.cantidad * newProduct.precio
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

    const handleOnDeleteProduct = (productId) => {
        setProductsToSell(productsToSell.filter((p) => p.id != productId));
    }

    return (
        <div className="sellBox">
            <SellForm list={FAKE_LIST} handleSubmit={handleOnAddProduct} handleSellProducts={handleOnShow} />
            {productsToSell.length > 0 && (
                <>
                    <SellTools handleOnDelete={handleOnDeleteProduct} />
                    <TTable list={productsToSell} maxWidth="40vw" />
                </>
            )}
            {showModal && (
                <TModal handleShow={handleOnShow} modalTitle="Factura">
                    <FacturaForm productsToSell={productsToSell}/>
                </TModal>
            )}
        </div>
    );
}
