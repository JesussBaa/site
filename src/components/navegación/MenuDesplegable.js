import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Stack from 'react-bootstrap/esm/Stack';
import Container from 'react-bootstrap/esm/Container';

export default function MenuDesplegable(){
  return( 
    <Container fluid>
      <Stack className='mx-auto' direction="vertical" gap={1}> 
        <div className='p-2'>
          <Link className="nav-link" to='/inicio'>Inicio</Link>
        </div>
        <div className="p-2 ms-auto">
          <NavDropdown title="Conócenos" id="basic-nav-dropdown">
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
    </Container>  
  );
}
