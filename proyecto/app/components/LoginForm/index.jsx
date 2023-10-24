import { Form, FloatingLabel, Button } from 'react-bootstrap';
import '../../styles/loginForm.css';

export default function LoginForm({ handleSubmit }) {
    return (
        <Form onSubmit={handleSubmit} className='loginFormBox'>
            <h5> Iniciar Sesión </h5>
            <FloatingLabel controlId="user" label="Usuario">
                <Form.Control name="user" placeholder='Usuario'/>
            </FloatingLabel>
            <FloatingLabel controlId="password" label="Contraseña">
                <Form.Control name="password" placeholder='Contraseña'/>
            </FloatingLabel>
            <Button type="submit"> Iniciar Sesión </Button>
        </Form>
    );
}
