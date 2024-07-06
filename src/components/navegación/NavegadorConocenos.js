import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavegadorConocenos() {
  const [activePage, setActivePage] = useState('estructura'); 

  const handlePrevClick = () => {
    
    switch (activePage) {
      case 'quienes':
        setActivePage('estructura'); 
        break;
      case 'mision':
        setActivePage('quienes');
        break;
      case 'vision':
        setActivePage('mision');
        break;
      case 'trayectoria':
        setActivePage('vision');
        break;
      case 'estructura':
        setActivePage('trayectoria');
        break;
      default:
        break;
    }
  };

  const handleNextClick = () => {
    // Implement logic to go to the next page
    switch (activePage) {
      case 'quienes':
        setActivePage('mision');
        break;
      case 'mision':
        setActivePage('vision');
        break;
      case 'vision':
        setActivePage('trayectoria');
        break;
      case 'trayectoria':
        setActivePage('estructura');
        break;
      case 'estructura':
        setActivePage('quienes');
        break;
      default:
        break;
    }
  };

  return (
    <Pagination className='NavButton'>
      <Pagination.Prev onClick={handlePrevClick} />
      <Pagination.Item active={activePage === 'quienes'}>
        <Link className='nav-link' to='/quienes'>
          {'¿Quiénes somos?'}
        </Link>
      </Pagination.Item>
      <Pagination.Item active={activePage === 'mision'}>
        <Link className='nav-link' to='/mision'>
          {'Misión'}
        </Link>
      </Pagination.Item>
      <Pagination.Item active={activePage === 'vision'}>
        <Link className='nav-link' to='/vision'>
          {'Visión'}
        </Link>
      </Pagination.Item>
      <Pagination.Item active={activePage === 'trayectoria'}>
        <Link className='nav-link' to='/trayectoria'>
          {'Trayectoria'}
        </Link>
      </Pagination.Item>
      <Pagination.Item active={activePage === 'estructura'}>
        <Link className='nav-link' to='/estructura'>
          {'Estructura organizacional'}
        </Link>
      </Pagination.Item>
      <Pagination.Next onClick={handleNextClick} />
    </Pagination>
  );
}

export default NavegadorConocenos;