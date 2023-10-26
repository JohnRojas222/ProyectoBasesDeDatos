import LiquidProductsList from '../LiquidProductsList';
import SolidProductsList from '../SolidProductsList';
import "../../styles/products.css";
import { Toaster } from 'sonner';

export default function Products() {
    return (
        <div className='productsList'>
            <SolidProductsList/>
            <LiquidProductsList/>
            <Toaster richColors closeButton/>
        </div>
    );
}