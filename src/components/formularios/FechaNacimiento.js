import React from 'react';
import { Form, Stack } from 'react-bootstrap';

// Componente funcional para las etiquetas
const CustomLabel = ({ children }) => <Form.Label>{children}</Form.Label>;

// Componente funcional para los selectores de fecha
const CustomSelect = ({ label, options }) => (
  <Form.Select size="sm">
    <option>{label}</option>
    {options.map(option => (
      <option key={option}>{option}</option>
    ))}
  </Form.Select>
);

const FechaNacimiento = () => {
  // Arrays para las opciones de día, mes y año
  const dias = Array.from({ length: 31 }, (_, index) => index + 1);
  const meses = Array.from({ length: 12 }, (_, index) => ('0' + (index + 1)).slice(-2));
  const años = Array.from({ length: 100 }, (_, index) => 2006 - index);

  return (
    <>
      <CustomLabel>Fecha de nacimiento:</CustomLabel>
      <Stack className='mx-auto' direction="horizontal" gap={1}>
        <CustomSelect label="Día:" options={dias} />
        <CustomSelect label="Mes:" options={meses} />
        <CustomSelect label="Año:" options={años} />
      </Stack>
    </>
  );
};

export default FechaNacimiento;