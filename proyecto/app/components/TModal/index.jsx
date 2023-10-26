"use client";
import { Modal, Button, Form, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TModal({ children, modalTitle = "Title", handleSubmit, handleShow }) {
    return (
        <Modal show centered>
            <Modal.Header>
                <Modal.Title> {modalTitle} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Container>
                        {children}
                    </Container>
                    <Button variant="secondary" onClick={handleShow}> Cancelar </Button>
                    <Button type="submit" className="ms-3"> Confirmar </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}