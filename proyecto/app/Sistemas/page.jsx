"use client";
import TNav from '../components/TNav';
import Products from '../components/Products';
import { Toaster } from 'sonner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

export default function Page() {
    return (
        <>
            <TNav/>
            <Products/>
            <Toaster richColors closeButton/>
        </>
    );
}
