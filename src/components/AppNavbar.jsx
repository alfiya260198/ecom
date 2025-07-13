import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { CartContext } from './CartContext';

const AppNavbar = ({ onCartClick }) => {
  const { totalQuantity } = useContext(CartContext);
  const location = useLocation();

  const isStorePage = location.pathname === '/store';

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="mx-auto gap-4">
          <Nav.Link as={NavLink} to="/" end>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
        </Nav>

        {isStorePage && (
          <Button
            variant="outline-light"
            onClick={onCartClick}
            className="ms-auto"
          >
            <BsCart3 /> Cart ({totalQuantity})
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
