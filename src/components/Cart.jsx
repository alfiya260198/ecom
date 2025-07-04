import React, { useState } from 'react';
import { Modal, Button, Table, Image } from 'react-bootstrap';

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

const Cart = ({ show, handleClose }) => {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleRemove = (title) => {
    const updatedCart = cartItems.filter(item => item.title !== title);
    setCartItems(updatedCart);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td><Image src={item.imageUrl} alt={item.title} width="60" /></td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(item.title)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
