"use client";
import Image from 'next/image';
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/nav.css'

export default function TNav({ }) {
    return (
        <Nav className="navBox">
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home" className='navBrand'>
                        <Image
                            alt=""
                            src="/images/icon.png"
                            width="60"
                            height="60"
                            className="d-inline-block align-top navBrandIcon"
                            priority={true}
                        />
                        <h5>El Baratico</h5>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Nav>
    );
}