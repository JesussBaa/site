import React from 'react'
import NavbarUp from '../../navegación/NavbarUp';
import Footer from '../../navegación/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MenuDesplegable from '../../navegación/MenuDesplegable';
import Image from 'react-bootstrap/esm/Image';
import NavegadorConocenos from '../../navegación/NavegadorConocenos';




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
              <Col xs='auto' className="mx-auto"><NavegadorConocenos/></Col>
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
