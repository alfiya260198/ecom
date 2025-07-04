import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ title, price, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
