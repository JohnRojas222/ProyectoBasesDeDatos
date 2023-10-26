import LiquidProductsList from '../LiquidProductsList';
import SolidProductsList from '../SolidProductsList';
import "../../styles/products.css";
import { Toaster } from 'sonner';
import { Carousel } from 'react-bootstrap';

export default function Products() {
    return (
        <div className='productsList'>
            <Carousel interval={null}>
                <Carousel.Item>
                    <SolidProductsList />
                </Carousel.Item>
                <Carousel.Item>
                    <LiquidProductsList />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}