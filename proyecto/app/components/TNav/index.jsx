"use client";
import Image from 'next/image';
import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import { useGetCurrentUser } from '@/app/hooks/useGetCurrentUser';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/nav.css';

export default function TNav({ }) {
    const router = useRouter();
    const currentUser = useGetCurrentUser();
    const [showDropDown, setShowDropDown] = useState(true);

    const handleCloseSession = () => {
        localStorage.clear();
        setShowDropDown(false);
        router.push("/");
    }

    console.log(currentUser)

    return (
        <Nav className="navBox">
            <Navbar>
                <Container>
                    <Navbar.Brand href="/" className='navBrand'>
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
                    {currentUser && Object.keys(currentUser).length > 0 && showDropDown && (
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary">
                                <Image
                                    src="/images/userIcon.png"
                                    width={30}
                                    height={30}
                                    alt="UserLogo"
                                    style={{ marginRight: "0.5em" }}
                                />
                                {currentUser.NOMBRE}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {currentUser.ROL == "U004" && (
                                    <Dropdown.Item onClick={() => router.push("/Procesos")}>Procesos</Dropdown.Item>
                                )}
                                <Dropdown.Item onClick={handleCloseSession}>Cerrar Sesión</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </Container>
            </Navbar>
        </Nav>
    );
}
