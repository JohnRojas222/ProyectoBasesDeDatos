"use client";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import TNav from "../components/TNav";
import "../styles/global.css";
import "../styles/editForm.css";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";

const FAKE_LIST = [
    {
        EAN: 123456789012345,
        descripcion: "Arroz",
        pesoEnGramos: 100,
        precioPorUnidad: 3000,
        cantidad: 50,
        area: "Abarrotes",
    },
    {
        EAN: 987654321098765,
        descripcion: "Frijoles",
        pesoEnGramos: 150,
        precioPorUnidad: 4000,
        cantidad: 70,
        area: "Cuidado Personal",
    },
    {
        EAN: 543210987654321,
        descripcion: "Aceite",
        pesoEnGramos: 175,
        precioPorUnidad: 5000,
        cantidad: 20,
        area: "Mercancías",
    },
]

const FAKE_LIQUID_LIST = [
    {
        PLU: 1111,
        EAN: 883210987654321,
        descripcion: "Arroz",
        pesoEnKilos: 100,
        precioPorKilogramo: 3000,
        area: "Frescos"
    },
    {
        PLU: 2222,
        EAN: 76543210987654,
        descripcion: "Frijoles",
        pesoEnKilos: 150,
        precioPorKilogramo: 4000,
        area: "Frescos"
    },
    {
        PLU: 3333,
        EAN: 223456789012346,
        descripcion: "Aceite",
        pesoEnKilos: 175,
        precioPorKilogramo: 5000,
        area: "Frescos"
    },
]

export default function Page({ params }) {
    const currentUser = useGetCurrentUser();
    const solidProduct = FAKE_LIST.find((p) => p.EAN == params.product);
    const liquidProduct = FAKE_LIQUID_LIST.find((p) => p.EAN == params.product);

    if (solidProduct && currentUser && currentUser.rol != "Gerente") {
        return (
            <>
                <TNav />
                <Form className="editFormBox">
                    <h5>{solidProduct.descripcion} ({solidProduct.EAN})</h5>
                    <FloatingLabel label="EAN" className="mb-3">
                        <Form.Control defaultValue={solidProduct.EAN} />
                    </FloatingLabel>
                    <FloatingLabel label="Descripción" className="mb-3">
                        <Form.Control defaultValue={solidProduct.descripcion} />
                    </FloatingLabel>
                    <FloatingLabel label="Peso En Gramos" className="mb-3">
                        <Form.Control defaultValue={solidProduct.pesoEnGramos} />
                    </FloatingLabel>
                    <FloatingLabel label="Precio Por Unidad" className="mb-3">
                        <Form.Control defaultValue={solidProduct.precioPorUnidad} />
                    </FloatingLabel>
                    <FloatingLabel label="Cantidad" className="mb-3">
                        <Form.Control defaultValue={solidProduct.cantidad} />
                    </FloatingLabel>
                    <FloatingLabel label="Área" className="mb-3">
                        <Form.Control defaultValue={solidProduct.area} />
                    </FloatingLabel>
                    <Button variant="secondary" onClick={() => window.history.back()}> Volver </Button>
                    <Button className="ms-3"> Editar </Button>
                </Form>
            </>
        );
    }

    if (liquidProduct && currentUser && currentUser.rol != "Gerente") {
        return (
            <>
                <TNav />
                <Form className="editFormBox">
                    <h5>{liquidProduct.descripcion} ({liquidProduct.EAN})</h5>
                    <FloatingLabel label="PLU" className="mb-3">
                        <Form.Control defaultValue={liquidProduct.PLU} />
                    </FloatingLabel>
                    <FloatingLabel label="EAN" className="mb-3">
                        <Form.Control defaultValue={liquidProduct.EAN} />
                    </FloatingLabel>
                    <FloatingLabel label="Descripción" className="mb-3">
                        <Form.Control defaultValue={liquidProduct.descripcion} />
                    </FloatingLabel>
                    <FloatingLabel label="Peso En Kilos" className="mb-3">
                        <Form.Control defaultValue={liquidProduct.pesoEnKilos} />
                    </FloatingLabel>
                    <FloatingLabel label="Precio Por Kilogramo" className="mb-3">
                        <Form.Control defaultValue={liquidProduct.precioPorKilogramo} />
                    </FloatingLabel>
                    <Form.Control className="d-none" defaultValue={"Liquidos"} />
                    <Button variant="secondary" onClick={() => window.history.back()}> Volver </Button>
                    <Button className="ms-3"> Editar </Button>
                </Form>
            </>
        );
    }

    if (solidProduct && currentUser && currentUser.rol == "Gerente") {
        return (
            <>
                <TNav />
                <Form className="editFormBox">
                    <h5>{solidProduct.descripcion} ({solidProduct.EAN})</h5>
                    <FloatingLabel label="EAN" className="mb-3">
                        <Form.Control defaultValue={solidProduct.EAN} disabled readOnly />
                    </FloatingLabel>
                    <FloatingLabel label="Descripción" className="mb-3">
                        <Form.Control defaultValue={solidProduct.descripcion} />
                    </FloatingLabel>
                    <FloatingLabel label="Cantidad" className="mb-3">
                        <Form.Control defaultValue={solidProduct.cantidad} />
                    </FloatingLabel>
                    <Button variant="secondary" onClick={() => window.history.back()}> Volver </Button>
                    <Button className="ms-3"> Editar </Button>
                </Form>
            </>
        );
    }

    if (liquidProduct && currentUser && currentUser.rol == "Gerente") {
        return (
            <>
                <TNav />
                <Form className="editFormBox">
                    <h5>{liquidProduct.descripcion} ({liquidProduct.EAN})</h5>
                    <FloatingLabel label="PLU" className="mb-3">
                        <Form.Control defaultValue={liquidProduct.PLU} disabled readOnly />
                    </FloatingLabel>
                    <FloatingLabel label="EAN" className="mb-3">
                        <Form.Control defaultValue={liquidProduct.EAN} disabled readOnly />
                    </FloatingLabel>
                    <FloatingLabel label="Descripción" className="mb-3">
                        <Form.Control defaultValue={liquidProduct.descripcion} />
                    </FloatingLabel>
                    <Form.Control className="d-none" defaultValue={"Liquidos"} />
                    <Button variant="secondary" onClick={() => window.history.back()}> Volver </Button>
                    <Button className="ms-3"> Editar </Button>
                </Form>
            </>
        );
    }

    return (
        <>
            Error
        </>
    );
}