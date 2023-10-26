"use client";
import TNav from '../components/TNav';
import { Toaster } from 'sonner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import Products from '../components/Products';

export default function Page() {
    return (
        <>
            <TNav/>
            <Products/>
            <Toaster richColors closeButton/>
        </>
    );
}
