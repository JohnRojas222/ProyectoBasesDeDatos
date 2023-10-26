"use client";
import TNav from '../components/TNav';
import { Toaster } from 'sonner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

export default function Page() {
    return (
        <>
            <TNav/>
            <Toaster richColors closeButton/>
        </>
    );
}
