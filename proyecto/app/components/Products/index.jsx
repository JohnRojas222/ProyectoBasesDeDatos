import LiquidProductsList from '../LiquidProductsList';
import SolidProductsList from '../SolidProductsList';
import "../../styles/products.css";

export default function Products() {
    return (
        <div className='productsList'>
            <SolidProductsList/>
            <LiquidProductsList/>
        </div>
    );
}