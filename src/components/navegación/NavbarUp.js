import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import ModalLogin from '../formularios/ModalLogin';
import { Stack } from 'react-bootstrap';

function NavbarUp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mw-100">
      <Container className='mw-100' style={{ backgroundColor: '#17202A' }}>
        <Navbar.Brand>
          <Link to='/inicio'>
            <Image src='../logo/tlapalcoatl.jpg' height='120' width='auto' alt='logo de EXCOM Tlapalcoatl A. C.' roundedCircle />
          </Link>
        </Navbar.Brand>

        <Stack className='mx-auto text-light d-flex justify-content-center' direction="vertical" gap={2}>
          <div>EXPERIENCIAS COMUNITARIAS TLAPALCOATL A. C.</div>
          <div>Por el Despertar de un Pueblo</div>
        </Stack>

        <div className='mx-auto p-2'>
          <Image src='../logo/usuario.png' height='75' width='75' alt='logo' />
          <div className='p-3 mb-0'><ModalLogin /></div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarUp;



