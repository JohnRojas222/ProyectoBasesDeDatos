"use client";
import TNav from '../components/TNav';
import { Toaster } from 'sonner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import { Button } from 'react-bootstrap';

export default function Page() {
    return (
        <>
            <TNav/>
            <Button> Realizar Respaldo </Button>
            <Button> Restautar Base de Datos </Button>
            <Button> Bitácoras </Button>
            <Button> Movimientos de Tablas Maestras </Button>
            <Toaster richColors closeButton/>
        </>
    );
}
