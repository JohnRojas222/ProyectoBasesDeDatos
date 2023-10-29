import LiquidProductsList from '../LiquidProductsList';
import SolidProductsList from '../SolidProductsList';
import { Carousel } from 'react-bootstrap';
import "../../styles/products.css";

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