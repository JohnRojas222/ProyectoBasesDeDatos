import TTable from '../../components/TTable';
import "../../styles/products.css"
import ProductsTools from '../ProductsTools';

const FAKE_LIST = [
    {
        EAN: 123456789012345,
        descripcion: "Arroz",
        pesoEnGramos: 100,
        precioPorUnidad: 3000,
        cantidad: 50,
    },
    {
        EAN: 987654321098765,
        descripcion: "Frijoles",
        pesoEnGramos: 150,
        precioPorUnidad: 4000,
        cantidad: 70,
    },
    {
        EAN: 543210987654321,
        descripcion: "Aceite",
        pesoEnGramos: 175,
        precioPorUnidad: 5000,
        cantidad: 20,
    },
]

const FAKE_LIQUID_LIST = [
    {
        PLU: 1111,
        EAN: 543210987654321,
        descripcion: "Arroz",
        pesoEnKilos: 100,
        precioPorKilogramo: 3000,
    },
    {
        PLU: 2222,
        EAN: 76543210987654,
        descripcion: "Frijoles",
        pesoEnKilos: 150,
        precioPorKilogramo: 4000,
    },
    {
        PLU: 3333,
        EAN: 123456789012346,
        descripcion: "Aceite",
        pesoEnKilos: 175,
        precioPorKilogramo: 5000,
    },
]


export default function Products() {
    return (
        <div className='productsList'>
            <div className='solidProductsList'>
                <ProductsTools />
                <h5> Solidos </h5>
                <TTable list={FAKE_LIST} />
            </div>
            <div className='liquidProductsList'>
                <ProductsTools />
                <h5> Liquidos </h5>
                <TTable list={FAKE_LIQUID_LIST} />
            </div>
        </div>
    );
}