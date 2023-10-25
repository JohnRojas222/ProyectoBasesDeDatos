import TNav from "../components/TNav";
import TTable from "../components/TTable";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/venta.css';
import Sell from "../components/Sell";

const FAKE_LIST = [
    {
        id: 0,
        producto: "Arroz",
        precio: 5,
    },
    {
        id: 1,
        producto: "Frijoles",
        precio: 7,
    },
    {
        id: 2,
        producto: "Aceite",
        precio: 3,
    },
    {
        id: 3,
        producto: "Fresco",
        precio: 5,
    },
]


export default function Page() {
    return (
        <>
            <TNav />
            <Container className="ventaBox">
                <TTable list={FAKE_LIST} maxWidth="50vw" maxHeight="75vh" title="Productos"/>
                <Sell list={FAKE_LIST} />
            </Container>
        </>
    );
}
