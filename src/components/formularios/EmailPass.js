import React from 'react';
import {FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const EmailRegistro = () => {
  return (
    <>
        <br/>
      <FormGroup className="mb-3">
        <FormLabel>Correo electrónico:</FormLabel>
        <FormControl size="sm" type="text" placeholder="correoelectronico@dominio.com" />
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel>Contraseña:</FormLabel>
        <FormControl size="sm" type="password" placeholder="********" />
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel>Confirmar contraseña:</FormLabel>
        <FormControl size="sm" type="password" placeholder="********" />
      </FormGroup>
    </>
  );
}

export default EmailRegistro;