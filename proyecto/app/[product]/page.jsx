"use client";
import TNav from "../components/TNav";
import useGetData from "../hooks/useGetData";
import useUpdateData from "../hooks/useUpdateData";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { checkFields } from "../functions/checkFields";
import { getFormData } from "../functions/getFormData";
import { Toaster, toast } from "sonner";
import "../styles/global.css";
import "../styles/editForm.css";

export default function Page({ params }) {
    const products = useGetData("/api/products");
    const areas = useGetData("/api/areas");
    const currentUser = useGetCurrentUser();

    const handleOnSubmit = async (e) => {
        if (checkFields(e)) {
            const formData = getFormData(e);
            const data = await useUpdateData("/api/products", formData);
            if (data) {
                toast.success("Exito!", { description: "Producto Editado Correctamente!" })
            }
        }
    }

    if (products && currentUser && currentUser.ROL == "U002") {
        const currentProduct = products.find((p) => p.EAN == params.product);
        if (currentProduct) {
            return (
                <>
                    <TNav />
                    <Form className="editFormBox" onSubmit={handleOnSubmit}>
                        <h5>{currentProduct.DESCRIPCION} ({currentProduct.EAN})</h5>
                        {currentProduct.AREA == "A004" && (
                            <FloatingLabel label="PLU" className="mb-3">
                                <Form.Control name="PLU" defaultValue={currentProduct.PLU} disabled readOnly />
                            </FloatingLabel>
                        )}
                        <FloatingLabel label="EAN" className="mb-3">
                            <Form.Control name="EAN" defaultValue={currentProduct.EAN} disabled readOnly />
                        </FloatingLabel>
                        <FloatingLabel label="Descripción" className="mb-3">
                            <Form.Control name="Descripcion" defaultValue={currentProduct.DESCRIPCION} />
                        </FloatingLabel>
                        {currentProduct.AREA != "A004" && (
                            <FloatingLabel label="Cantidad" className="mb-3">
                                <Form.Control name="Cantidad" defaultValue={currentProduct.CANTIDAD} />
                            </FloatingLabel>
                        )}
                        <Button variant="secondary" onClick={() => window.history.back()}> Volver </Button>
                        <Button className="ms-3" type="submit"> Editar </Button>
                    </Form>
                    <Toaster richColors closeButton />
                </>
            );
        }
    }


    if (products && currentUser && currentUser.ROL != "U002") {
        const currentProduct = products.find((p) => p.EAN == params.product);
        if (currentProduct) {
            return (
                <>
                    <TNav />
                    <Form className="editFormBox" onSubmit={handleOnSubmit}>
                        <h5>{currentProduct.DESCRIPCION} ({currentProduct.EAN})</h5>
                        {currentProduct.AREA == "A004" && (
                            <FloatingLabel label="PLU" className="mb-3">
                                <Form.Control name="PLU" defaultValue={currentProduct.PLU} disabled readOnly />
                            </FloatingLabel>
                        )}
                        <FloatingLabel label="EAN" className="mb-3">
                            <Form.Control name="EAN" defaultValue={currentProduct.EAN} disabled readOnly />
                        </FloatingLabel>
                        <FloatingLabel label="Descripción" className="mb-3">
                            <Form.Control name="Descripcion" defaultValue={currentProduct.DESCRIPCION} />
                        </FloatingLabel>
                        <Form.Select className="mb-3" name="Area" defaultValue={currentProduct.AREA}>
                            {areas && areas.map((area, index) => (
                                <option key={index} value={area.CODIGO}>{area.DESCRIPCION}</option>
                            ))}
                        </Form.Select>
                        <FloatingLabel label="Peso" className="mb-3">
                            <Form.Control name="Peso" defaultValue={currentProduct.PESO} />
                        </FloatingLabel>
                        <FloatingLabel label="Precio" className="mb-3">
                            <Form.Control name="Precio" defaultValue={currentProduct.PRECIO} />
                        </FloatingLabel>
                        {currentProduct.AREA != "A004" && (
                            <FloatingLabel label="Cantidad" className="mb-3">
                                <Form.Control name="Cantidad" defaultValue={currentProduct.CANTIDAD} />
                            </FloatingLabel>
                        )}
                        <Button variant="secondary" onClick={() => window.history.back()}> Volver </Button>
                        <Button className="ms-3" type="submit"> Editar </Button>
                    </Form>
                    <Toaster richColors closeButton />
                </>
            );
        }
    }

    return (
        <>
            Error
        </>
    );
}