"use client";
import { checkFields } from '@/app/functions/checkFields';
import { getFormData } from '@/app/functions/getFormData';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import '../../styles/loginForm.css';

export default function LoginForm({ handleSubmit }) {

    const handleOnSubmit = (e) => {
        if (checkFields(e)) {
            handleSubmit(getFormData(e));
        }
    }
    
    return (
        <Form onSubmit={handleOnSubmit} className='loginFormBox'>
            <h5><strong>Iniciar Sesión</strong></h5>
            <FloatingLabel controlId="usuario" label="Usuario">
                <Form.Control name="id" placeholder='Usuario' />
            </FloatingLabel>
            <FloatingLabel controlId="constraseña" label="Contraseña">
                <Form.Control type="password" name="password" placeholder='Contraseña' />
            </FloatingLabel>
            <Button type="submit"> Iniciar Sesión </Button>
        </Form>
    );
}
