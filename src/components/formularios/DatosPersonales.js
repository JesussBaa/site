import React from 'react';
import { Form, Stack } from 'react-bootstrap';

const DatosPersonales = () => {
  return (
      <Form>
        <Form.Label>Datos personales:</Form.Label>
        <Stack className='mx-auto' direction="horizontal" gap={1}>
          <Form.ControlInput type="text" placeholder="Nombre / nombres" />
          <Form.ControlInput type="text" placeholder="Apellido / apellidos" />
        </Stack>
      </Form>   
  );
};

export default DatosPersonales;