import TNav from "../TNav";
import Login from "../Login";
import "../../styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductosCrud from "@/app/services/ProductosCrud";

const productosCrud = new ProductosCrud();
export default function HomePage() {
    
    // productosCrud.create({plu:98754, ean:"9876543210123", descripcion:"Tomates", area:"A001", precio:5000, peso:5, cantidad:5}).then(productos => {
    //     console.log(productos);
    // });

    // productosCrud.update('1234567890123', {
    //     precio: 150,
    //     descripcion: 'Producto de prueba actualizado'
    // });

    productosCrud.delete('1234567890123');

    productosCrud.read().then(productos => {
        console.log(productos);
    });

    return (
        <>
            <TNav/>
            <Login/>
        </>
    );
}
