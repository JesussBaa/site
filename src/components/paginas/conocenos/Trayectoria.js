import React from 'react'
import NavbarUp from '../../navegación/NavbarUp';
import Footer from '../../navegación/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MenuDesplegable from '../../navegación/MenuDesplegable';
import Image from 'react-bootstrap/Image';
import NavegadorConocenos from '../../navegación/NavegadorConocenos';


export default function Trayectoria(){
  return(
    <div>
      <div>
        <NavbarUp/>
      </div>
      <div>
        <PageTrayectoria/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

function PageTrayectoria(){
  return(
    <div>
      <Container fluid='true'>
        <Row >
          <Col xs='auto'><MenuDesplegable/></Col>
          <Col>
            <Row>
              <Col xs='auto' className="mx-auto"><NavegadorConocenos/></Col>
            </Row>
            <Row>
              <Col>
                <CartaTrayectoria/>
              </Col>
              <Col>
                <Image src="../imagenes/img1.png" fluid thumbnail/>
              </Col>
            </Row>
            <Row>
              <Card border="light" style={{ width: 'auto' }}>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Row>
            <Row>
              <Col>
                <Image src="../imagenes/img2.png" fluid />
              </Col>
              <Col>
                <Card border="light" style={{ width: 'auto' }}>
                  <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function CartaTrayectoria(){
  return(
    <>
      <Card border="light" style={{ width: 'auto' }}>
          <Card.Header>TRAYECTORIA</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      <br />
    </>
  );
}

/*
function SliderTrayectoria(){
  return(
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <Image src="../imagenes/img1.png" class="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000" >
            <Image src="../imagenes/img2.png" class="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src="../imagenes/img3.png" class="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}*/