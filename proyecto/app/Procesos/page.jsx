"use client";
import TNav from '../components/TNav';
import { Toaster, toast } from 'sonner';
import { Button, Tab, Tabs } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/processes.css';
import TTable from '../components/TTable';
import useGetData from "@/app/hooks/useGetData";


export default function Page() {
    const bitacoras = useGetData("/api/bitacoras");
    const movimiento = useGetData("/api/movimientos");
    const [facturas, setFacturas] = useState([]);
    const [movimientos, setMovimientos] = useState([]);
    
    useEffect(() => {
        setFacturas(bitacoras);
        setMovimientos(movimiento);

    }, [bitacoras, movimiento]);
    console.log(facturas);
    const onDoBackup = () => {
        toast.success("Exito!", {description:"Respaldo de la base de datos realizado correctamete!!"});
    }

    const onLoadBackup = () => {
        toast.success("Exito!", {description:"Restauración de la base de datos realizado correctamete!!"});
    }

    return (
        <>
            <TNav/>
            <Tabs defaultActiveKey="procesos" className='processesTabs'>
                <Tab title="Procesos" eventKey={"procesos"} className={"processesTab"}>
                    <h5> Realizar Respaldo de la Base de Datos </h5>
                    <Button onClick={onDoBackup}> Realizar Respaldo </Button>
                    <h5> Restaurar la Base de Datos </h5>
                    <Button onClick={onLoadBackup}> Restaurar Base de Datos </Button>
                </Tab>
                <Tab title="Bitacoras" eventKey={"bitacoras"} className='tabTables'>
                    <TTable list={facturas} maxHeight="54vh" />
                </Tab>
                <Tab title="Movimientos" eventKey={"movimientos"} className='tabTables'>
                    <TTable list={movimientos} maxHeight="54vh" />
                </Tab>
            </Tabs>
            <Toaster richColors closeButton/>
        </>
    );
}
