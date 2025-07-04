import React, { useState } from 'react';
import { Offcanvas, Button, Table, Image } from 'react-bootstrap';

const initialCart = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

const CartDrawer = ({ show, handleClose }) => {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleRemove = (title) => {
    const updated = cartItems.filter(item => item.title !== title);
    setCartItems(updated);
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx}>
                  <td><Image src={item.imageUrl} alt={item.title} width="50" /></td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => handleRemove(item.title)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartDrawer;
