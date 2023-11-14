import TNav from "../TNav";
import Login from "../Login";
import "../../styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductosCrud from "@/app/services/ProductosCrud";

const crud = new ProductosCrud();
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
