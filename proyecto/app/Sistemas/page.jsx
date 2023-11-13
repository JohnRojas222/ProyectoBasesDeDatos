"use client";
import TNav from '../components/TNav';
import { Toaster } from 'sonner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import ProductsList from '../components/ProductsList';

export default function Page() {
    return (
        <>
            <TNav/>
            <ProductsList/>
            <Toaster richColors closeButton/>
        </>
    );
}
