import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartDrawer from './components/CartDrawer';
import AppNavbar from './components/AppNavbar';
import ProductsList from './components/Product/ProductsList';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ProductDetailPage from './components/Product/ProductDetailPage';
import LoginForm from './components/Login/LoginForm';
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './AuthContext';
import Signup from './components/Signup/Signup';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <AuthProvider>
      <CartProvider>
        <AppNavbar onCartClick={() => setShowCart(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
  path="/store"
  element={
    <PrivateRoute>
      <ProductsList />
    </PrivateRoute>
  }
/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path='/signup' element={<Signup />} />
          
        </Routes>
        <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
