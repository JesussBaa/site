import React from 'react';
import { Form } from 'react-bootstrap';

const SexoFormulario = () => {
  const type = 'radio'; // Definir el tipo de input

  return (
    <Form>
      <Form.Label>Sexo:</Form.Label>
      <div className="mb-3 p-2">
        <Form.Check
          inline
          label="Femenino"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
          size="sm"
        />
        <Form.Check
          inline
          label="Masculino"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          size="sm"
        />
        <Form.Check
          inline
          label="Personalizado"
          name="group1"
          type={type}
          id={`inline-${type}-3`}
          size="sm"
        />
      </div>
    </Form>
  );
};

export default SexoFormulario;
