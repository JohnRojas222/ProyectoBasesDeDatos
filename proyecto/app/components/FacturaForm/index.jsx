import { Col, Form, Row } from "react-bootstrap";
import { currentDate } from "@/app/functions/currentDate";
import { currentHour } from "@/app/functions/currentHour";
import { useGetCurrentUser } from "@/app/hooks/useGetCurrentUser";

export default function FacturaForm({ productsToSell, handleSubmit }) {
    const currentUser = useGetCurrentUser();

    const getTotalPrice = () => {
        return productsToSell.reduce((acc, p) => acc + p.PRECIO * p.CANTIDAD, 0);
    }

    return (
        <div className="mb-3">
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2"> Fecha </Form.Label>
                <Col sm="10">
                    <Form.Control name="Fecha" value={currentDate()} readOnly disabled className="mb-3" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2"> Hora </Form.Label>
                <Col sm="10">
                    <Form.Control name="Hora" value={currentHour()} readOnly disabled className="mb-3" />
                </Col>
            </Form.Group>
            {currentUser && (
                <>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2"> Cajero </Form.Label>
                        <Col sm="10">
                            <Form.Control name="Usuario" value={currentUser.CODIGO} readOnly disabled className="mb-3" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2"> Caja </Form.Label>
                        <Col sm="10">
                            <Form.Control name="Cajero" value={currentUser.CAJA} readOnly disabled className="mb-3" />
                        </Col>
                    </Form.Group>
                </>
            )}
            <Form.Text className="text-justify">
                <h5> Productos: </h5>
                {productsToSell.map((p, index) => (
                    <>
                        {index + 1}. Producto: {p.DESCRIPCION}. Precio: ₡{p.PRECIO}.
                        Cantidad: {p.CANTIDAD}. SubTotal: ₡{p.precioTotal}. <br />
                    </>
                ))}
                Total: ₡{getTotalPrice()}.
            </Form.Text>
        </div>
    );
}