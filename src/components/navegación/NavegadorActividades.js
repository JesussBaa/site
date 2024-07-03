import React from "react";
import Pagination from 'react-bootstrap/Pagination';



export default function NavegadorActividades(){
    return(
        <Pagination className='NavButton mx-auto'>
            <Pagination.Prev />
            <Pagination.Item active>{'Ajedrez'}</Pagination.Item>
            <Pagination.Item>{'Boxeo'}</Pagination.Item>
            <Pagination.Item>{'Ingles'}</Pagination.Item>
            <Pagination.Item>{'Grupo de Jóvenes'}</Pagination.Item>
            <Pagination.Item >{'Regularización'}</Pagination.Item>
            <Pagination.Item >{'Teatro'}</Pagination.Item>
            <Pagination.Next />
        </Pagination>
    );
}