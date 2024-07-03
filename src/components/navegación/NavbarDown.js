import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/esm/Stack';



export default function NavbarDown() {
    return (  
        
            <Navbar bg="light" data-bs-theme="ligth" expand="lg" className="bg-body-tertiary">
            <Container className='mw-100' style={{ backgroundColor: '#17202A' }}>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Stack className='mx-auto text-light' direction="horizontal" gap={3}> 
                        <div className='p-0'>
                            <Link className='text-light' to='/inicio' >Inicio</Link>
                        </div>
                        <div className="p-2 ms-auto" data-bs-theme="light"> 
                            <NavDropdown title="Conócenos" id="basic-nav-dropdown" menuVariant='secondary'>
                                <Link className="nav-link" to='/quienes'>
                                    <NavDropdown.Item href="#action/3.1">¿Quiénes somos?</NavDropdown.Item>
                                </Link>
                                <Link className="nav-link" to='/mision'>
                                    <NavDropdown.Item href="#action/3.2">Misión</NavDropdown.Item>
                                </Link>
                                <Link className="nav-link" to='/vision'>
                                    <NavDropdown.Item href="#action/3.4">Visión</NavDropdown.Item>
                                </Link>      
                                <Link className="nav-link" to='/trayectoria'>
                                    <NavDropdown.Item href="#action/3.5">Trayectoria</NavDropdown.Item>
                                </Link> 
                                <Link className="nav-link" to='/estructura'>
                                    <NavDropdown.Item href="#action/3.6">Estructura organizacional</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        </div>
                        <div className='p-2'>
                            <Link className="nav-link" to='/actividades'>Actividades</Link>
                        </div>
                        
                    </Stack>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
        
    );
}

