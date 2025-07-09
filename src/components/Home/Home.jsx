import React from 'react';
import { Container } from 'react-bootstrap';
import { FaRegPlayCircle } from 'react-icons/fa';
import HomeTour from './HomeTour';
import Footer from '../Footer';

const Home = () => {
  return (
    <Container fluid>
      <div className="text-center bg-secondary py-5 w-100 ">
        <h1 className="display-4 text-white">The Generics</h1>

      <div className="d-flex flex-column align-items-center mt-4">
        <button className="btn btn-outline-primary mb-3 fs-4 text-white" style={{ width: '20%' }}>
          Get our Latest Album
        </button>
        <button className="border-primary rounded-circle bg-white text-primary fs-1 items-center" style={{ width: '80px' }}>►</button>
      </div>
      </div>

      <HomeTour />
      <Footer />
    </Container>
  );
};

export default Home;
