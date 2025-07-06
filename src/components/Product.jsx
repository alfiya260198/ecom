import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Product = ({ title, price, imageUrl }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({ title, price, imageUrl });
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary" onClick={handleAdd}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
