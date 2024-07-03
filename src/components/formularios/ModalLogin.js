import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import FechaNacimiento from './FechaNacimiento';
import SexoFormulario from './SexoFormulario';
import EmailRegistro from './EmailRegistro';
import EmailLogin from './EmailLogin';
import { Stack } from 'react-bootstrap';
import ChekAviso from './ChekAviso';
import DatosPersonales from './DatosPersonales';

export default function ModalLogin() {
    const [showRegistroModal, setShowRegistroModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const openRegistroModal = () => setShowRegistroModal(true);
    const closeRegistroModal = () => setShowRegistroModal(false);
    const openLoginModal = () => setShowLoginModal(true);
    const closeLoginModal = () => setShowLoginModal(false);

    const handleRegistroSubmit = (e) => {
        e.preventDefault();
        // Manejar lógica de envío del formulario aquí
        closeRegistroModal();
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Manejar lógica de inicio de sesión aquí
        closeLoginModal();
    };

    return (
        <>
            <Stack className='p-5' direction="horizontal" gap={2}>
                <Button variant="outline-primary" onClick={openRegistroModal}>REGISTRO</Button>
                <Button variant="outline-success" onClick={openLoginModal}>LOGIN</Button>
            </Stack>

            <Modal show={showRegistroModal} onHide={closeRegistroModal}>
                <Modal.Header closeButton>
                    <Modal.Title>REGÍSTRATE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleRegistroSubmit}>
                        <DatosPersonales/>
                        <SexoFormulario />
                        <FechaNacimiento />
                        <EmailRegistro/>
                        <ChekAviso/>
                        <Stack className='p-5' direction="vertical" gap={2} >
                            <Button size="sm" variant="primary" type="submit">ENVIAR DATOS</Button>
                            <Button size="sm" variant='danger' onClick={closeRegistroModal}>CERRAR</Button>
                        </Stack>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showLoginModal} onHide={closeLoginModal}>
                <Modal.Header closeButton>
                    <Modal.Title>INICIA SESIÓN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleLoginSubmit}>
                        <EmailLogin/>
                        <br />
                        <div className='p-4 d-flex justify-content-center'>
                            <Link to='/lost'>¿Olvidaste la contraseña?</Link>
                        </div>
                        <Stack className='p-5' direction="vertical" gap={2}>
                            <Button variant="primary" type="submit">INICIAR SESIÓN</Button>
                            <Button variant="danger" onClick={closeLoginModal}>CERRAR</Button>
                        </Stack>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}



