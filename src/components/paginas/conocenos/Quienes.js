import React from 'react'
import NavbarUp from '../../navegación/NavbarUp';
import Footer from '../../navegación/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import MenuDesplegable from '../../navegación/MenuDesplegable';
import Image from 'react-bootstrap/esm/Image';




export default function Quienes(){
  return(
    <div>
      <div>
        <NavbarUp/>
      </div>
      <div>
        <QuinesSomos/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

function QuinesSomos(){
  return(
    <div>
      <Container fluid='true'>
        <Row >
          <Col xs='auto'><MenuDesplegable/></Col>
          <Col>
            <Row>
              <Col xs='auto' className="mx-auto"><Navegador/></Col>
            </Row>
            <Row>
              <Col>
                <CartaQuienes/>
              </Col>
              <Col>
                <Image src="../imagenes/img1.png" fluid thumbnail/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


function Navegador(){
  return(
    <Pagination className='NavButton'>
      <Pagination.Prev />
      <Pagination.Item active>{'¿Quiénes somos?'}</Pagination.Item>
      <Pagination.Item>{'Misión'}</Pagination.Item>
      <Pagination.Item>{'Visión'}</Pagination.Item>
      <Pagination.Item>{'Trayectoria'}</Pagination.Item>
      <Pagination.Item >{'Estructura organizacional'}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
}

function CartaQuienes(){
  return(
    <>
      <Card border="light" style={{ width: 'auto' }}>
          <Card.Header>¿QUIÉNES SOMOS?</Card.Header>
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
function SliderQuienes(){
  return(
    <div>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="../carrusel_inicio/img1.png" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000" >
            <img src="../carrusel_inicio/img2.png" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../carrusel_inicio/img3.png" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}*/
