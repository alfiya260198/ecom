import React, { useContext } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs';
import { CartContext } from './CartContext';

const AppNavbar = ({ onCartClick }) => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">E-Store</Navbar.Brand>
        <Button variant="outline-light" onClick={onCartClick}>
          <BsCart3 /> Cart ({totalQuantity})
        </Button>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
