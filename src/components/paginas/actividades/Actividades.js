import React from 'react'
import NavbarUp from '../../navegación/NavbarUp';
import Footer from '../../navegación/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuDesplegable from '../../navegación/MenuDesplegable';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';




export default function Actividades(){
    return(
        <div>
            <div>
                <NavbarUp/>
            </div>
            <div>
                <PaginaActividades/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

function PaginaActividades(){
  return (
      <div>
        <Container fluid='true'>
            <Row>
                <Col xs='auto'><MenuDesplegable/></Col>
                <Col>
                    <Row xs='auto' class="d-flex justify-content-center">
                        
                            <Col className='p-3 d-flex justify-content-center'>
                                <h3>ACTIVIDADES</h3>
                            </Col>
                            <Col className='d-flex justify-content-center mx-auto'>
                                <br/>
                                <BuscadorActividades/>
                            </Col> 
                        
                        <br/><br/><br/>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="../actividades/boxeo.png" />
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-center">Boxeo</Card.Title>
                                        <Link className='nav-link d-flex justify-content-center' to='/box'>¡Conoce más!</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br/>
                            <div>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="../actividades/ingles.png" />
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-center">Ingles</Card.Title>
                                        <Link className='nav-link d-flex justify-content-center' to='/ingles'>¡Conoce más!</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br/>
                            <div>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="../actividades/ninguna.png" />
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-center">Otra actividad</Card.Title>
                                        <Link className='nav-link d-flex justify-content-center' to='/'>¡Conoce más!</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br/>
                        </Col>
                        <Col>
                            <div>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="../actividades/teatro.png" />
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-center">Teatro</Card.Title>
                                        <Link className='nav-link d-flex justify-content-center' to='/teatro'>¡Conoce más!</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br/>
                            <div>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="../actividades/regularizacion.png" />
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-center">Regularización</Card.Title>
                                        <Link className='nav-link d-flex justify-content-center' to='/regularizacion'>¡Conoce más!</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br/>
                            <div>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="../actividades/ninguna.png" />
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-center">Otra actividad</Card.Title>
                                        <Link className='nav-link d-flex justify-content-center' to='/'>¡Conoce más!</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br/>
                        </Col>
                        <Col>
                            <div>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="../actividades/ajedrez.png" />
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-center">Ajedrez</Card.Title>
                                        <Link className='nav-link d-flex justify-content-center' to='/ajedrez'>¡Conoce más!</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br/>
                            <div>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="../actividades/jovenes.png" />
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-center">Grupo de jóvenes</Card.Title>
                                        <Link className='nav-link d-flex justify-content-center' to='/jovenes'>¡Conoce más!</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br/>
                            <div>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="../actividades/ninguna.png"/>
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-center">Otra actividad</Card.Title>
                                        <Link className='nav-link d-flex justify-content-center' to='/'>¡Conoce más!</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </div>    
  );
}


function BuscadorActividades(){
    return(
        <Navbar className="bg-body-tertiary justify-content-between">
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Navbar>
    );
}