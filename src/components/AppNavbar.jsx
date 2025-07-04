import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs';

const AppNavbar = ({ onCartClick }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">E-Store</Navbar.Brand>
        <Button variant="outline-light" onClick={onCartClick}>
          <BsCart3 /> Cart
        </Button>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
