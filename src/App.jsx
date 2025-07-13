import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartDrawer from './components/CartDrawer';
import AppNavbar from './components/AppNavbar';
import ProductsList from './components/ProductsList';
import Home from './components/Home/Home';
import { CartProvider } from './components/CartContext';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <AppNavbar onCartClick={() => setShowCart(true)} />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/store" element={<ProductsList />} />
  <Route path="/about" element={<About />} /> optional
  <Route path="/contact" element={<Contact />} /> optional
</Routes>

        <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
