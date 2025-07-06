import React, { useState } from 'react';
import CartDrawer from './components/CartDrawer';
import AppNavbar from './components/AppNavbar';
import ProductsList from './components/ProductsList';
import { CartProvider } from './components/CartContext'; // 🆕

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider> {/* 🧠 Wrap inside App.js */}
      <AppNavbar onCartClick={() => setShowCart(true)} />
      <ProductsList />
      <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
    </CartProvider>
  );
}

export default App;
