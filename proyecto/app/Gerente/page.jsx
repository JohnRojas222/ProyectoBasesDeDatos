"use client";
import TNav from '../components/TNav';
import ProductsByArea from '../components/ProductsByArea';
import { Toaster } from 'sonner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

export default function Page() {
    return (
        <>
            <div>
                
            </div>
            <TNav/>
            <ProductsByArea/>
            <Toaster richColors closeButton/>
        </>
    );
}
