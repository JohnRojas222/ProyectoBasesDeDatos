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

const FAKE_LIQUID_LIST = [
    {
        PLU: 1111,
        EAN: 543210987654321,
        descripcion: "Arroz",
        pesoEnKilos: 100,
        precioPorKilogramo: 3000,
    },
    {
        PLU: 2222,
        EAN: 76543210987654,
        descripcion: "Frijoles",
        pesoEnKilos: 150,
        precioPorKilogramo: 4000,
    },
    {
        PLU: 3333,
        EAN: 123456789012346,
        descripcion: "Aceite",
        pesoEnKilos: 175,
        precioPorKilogramo: 5000,
    },
    {
        PLU: 1111,
        EAN: 543210987654321,
        descripcion: "Arroz",
        pesoEnKilos: 100,
        precioPorKilogramo: 3000,
    },
    {
        PLU: 2222,
        EAN: 76543210987654,
        descripcion: "Frijoles",
        pesoEnKilos: 150,
        precioPorKilogramo: 4000,
    },
    {
        PLU: 3333,
        EAN: 123456789012346,
        descripcion: "Aceite",
        pesoEnKilos: 175,
        precioPorKilogramo: 5000,
    },
    {
        PLU: 1111,
        EAN: 543210987654321,
        descripcion: "Arroz",
        pesoEnKilos: 100,
        precioPorKilogramo: 3000,
    },
    {
        PLU: 2222,
        EAN: 76543210987654,
        descripcion: "Frijoles",
        pesoEnKilos: 150,
        precioPorKilogramo: 4000,
    },
    {
        PLU: 3333,
        EAN: 123456789012346,
        descripcion: "Aceite",
        pesoEnKilos: 175,
        precioPorKilogramo: 5000,
    },
    {
        PLU: 1111,
        EAN: 543210987654321,
        descripcion: "Arroz",
        pesoEnKilos: 100,
        precioPorKilogramo: 3000,
    },
    {
        PLU: 2222,
        EAN: 76543210987654,
        descripcion: "Frijoles",
        pesoEnKilos: 150,
        precioPorKilogramo: 4000,
    },
    {
        PLU: 3333,
        EAN: 123456789012346,
        descripcion: "Aceite",
        pesoEnKilos: 175,
        precioPorKilogramo: 5000,
    },
    {
        PLU: 1111,
        EAN: 543210987654321,
        descripcion: "Arroz",
        pesoEnKilos: 100,
        precioPorKilogramo: 3000,
    },
    {
        PLU: 2222,
        EAN: 76543210987654,
        descripcion: "Frijoles",
        pesoEnKilos: 150,
        precioPorKilogramo: 4000,
    },
    {
        PLU: 3333,
        EAN: 123456789012346,
        descripcion: "Aceite",
        pesoEnKilos: 175,
        precioPorKilogramo: 5000,
    },
    {
        PLU: 1111,
        EAN: 543210987654321,
        descripcion: "Arroz",
        pesoEnKilos: 100,
        precioPorKilogramo: 3000,
    },
    {
        PLU: 2222,
        EAN: 76543210987654,
        descripcion: "Frijoles",
        pesoEnKilos: 150,
        precioPorKilogramo: 4000,
    },
    {
        PLU: 3333,
        EAN: 123456789012346,
        descripcion: "Aceite",
        pesoEnKilos: 175,
        precioPorKilogramo: 5000,
    },
]

export default function Page() {
    const bitacoras = useGetData("/api/bitacoras");
    const [bitacoraList, setBitacoraList] = useState(bitacoras);
    const [facturas, setFacturas] = useState([]);
    const [movimientos, setMovimientos] = useState([]);
    
    useEffect(() => {
        setBitacoraList(bitacoras);
        if (Array.isArray(bitacoraList)) {
            setFacturas(bitacoraList.filter(objeto => objeto.TABLA === 'Factura'));
            setMovimientos(bitacoraList.filter(objeto => objeto.TABLA !== 'Factura'));
          }

    }, [bitacoras]);
    console.log(movimientos);
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
