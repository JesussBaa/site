import React from 'react';
import { Form} from 'react-bootstrap';

const DatosPersonales = () => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Datos personales:</Form.Label>
      <Form.Control size="sm" type="text" placeholder="Nombre / nombres" />
      <br/>
      <Form.Control size="sm" type="text" placeholder="Apellido / apellidos" />
    </Form.Group>  
  );
};

export default DatosPersonales;