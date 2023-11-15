import TNav from "../TNav";
import Login from "../Login";
import "../../styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FacturaCrud from "@/app/services/FacturaCrud";

const crud = new FacturaCrud();
export default function HomePage() {
    
    // crud.read().then(elementos => {
    //     console.log(elementos);
    // });

    // crud.create({
    //     Codigo: 111, 
    //     Producto: 1122334455667,
    //     Cantidad: 3,
    //     SubTotal: 5000,
    //     Total: 15000,
    //     Cajero: "USR001",
    //     Fecha: "14/11/23",
    //     Hora: "20:20", 
    // }).then(elementos => {
    //     console.log(elementos);
    // });

    // crud.update('111', {
    //     Total: 200000,
    // });

    // crud.delete('111');

    // crud.read().then(elementos => {
    //     console.log(elementos);
    // });

    return (
        <>
            <TNav/>
            <Login/>
        </>
    );
}
