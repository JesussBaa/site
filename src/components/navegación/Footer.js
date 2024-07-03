import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';
import Button from "react-bootstrap/esm/Button";



export default function Footer(){
    return(
        <section>
          <div>
            <Footer1/>
          </div>
          <div>
            <Footer2/>
          </div>
        </section>
    );
}

function Footer1() {
    return (
      <MDBFooter className='w-100 p-0' bgColor='light' >
        <MDBContainer className='mw-100' style={{ backgroundColor: '#17202A' }}>
          <MDBRow className="w-100 p-4" style={{ backgroundColor: '#17202A' }}>
            <MDBCol lg='2' md='4' className='mb-4 mb-md-0'>
              <h6 className='text-uppercase text-light'>Telefonos</h6>
  
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className=''>
                    00-00-00-00-00 
                  </a>
                </li>
                <li>
                  <a href='#!' className=''>
                    00-00-00-00-00 
                  </a>
                </li>
              </ul>
            </MDBCol>
            <div className="vr"/>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h6 className='text-uppercase mb-0 text-light'>E-mail</h6>
  
              <ul className='list-unstyled'>
                <li>
                  <a href='#!' className=''>
                  excomtlapalcoatl.ac@outlook.com
                  </a>
                </li>
              </ul>
            </MDBCol>
            <div className="vr" />
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h6 className='text-uppercase text-light'>Redes sociales</h6>
  
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className=''>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='#!' className=''>
                    X
                  </a>
                </li>
                <li>
                  <a href='#!' className=''>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href='#!' className=''>
                    Instagram
                  </a>
                </li>
              </ul>
            </MDBCol>
            <div className="vr" />
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h6 className='text-uppercase mb-0 text-light'>Ubicación</h6>
  
              <ul className='list-unstyled'>
                <li>
                  <a href='#!' className=''>
                  https://maps.app.goo.gl/Tb3SjmxrJiS17Qxc9
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>

    );
}

function Footer2() {
    return (
      <MDBFooter className='text-center text-white' style={{ backgroundColor: '#17202A' }}>
        <MDBContainer className='p-4 pb-0'>
          <section className=''>
            <p className='d-flex justify-content-center align-items-center'>
              <div className="vr" />
              <Button className="d-grid gap-2" variant="link" size="sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>Aviso de privacidad</Button>{' '}
                            
              <div className="vr" />
              <Button className="d-grid gap-2" variant="link" size="sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>Mapa de navegación</Button>{' '}
                 
              <div className="vr" />
            </p>
          </section>
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-light'>
            <p>TODOS LOS DERECHOS RESERVADOS - EXPERIENCIAS COMUNITARIAS TLAPALCOATL A. C.</p>
          </a>
        </div>
      </MDBFooter>
    );
}