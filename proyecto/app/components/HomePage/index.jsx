import TNav from "../TNav";
import Login from "../Login";
import "../../styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import CajeroCrud from "@/app/services/CajeroCrud";

//const crud = new CajeroCrud();
export default function HomePage() {
    
    
    // crud.read().then(elementos => {
    //     console.log(elementos);
    // });

    // crud.create({
    //     usuario: 123456789, 
    //     caja: 2,
    // }).then(elementos => {
    //     console.log(elementos);
    // });

    // crud.update('123456789', {
    //     caja: 5,
    // });

    // crud.read().then(elementos => {
    //     console.log(elementos);
    // });

    // productosCrud.delete('1234567890123');

    return (
        <>
            <TNav/>
            <Login/>
        </>
    );
}
