"use client";
import TNav from '../components/TNav';
import Sell from '../components/Sell';
import { Toaster } from 'sonner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

export default function Page() {
    return (
        <>
            <TNav/>
            <Sell/>
            <Toaster richColors closeButton/>
        </>
    );
}
