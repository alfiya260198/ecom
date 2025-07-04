import React, { useState } from 'react';
import CartDrawer from './components/CartDrawer';
import AppNavbar from './components/AppNavbar';
import ProductsList from './components/ProductsList'; 

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <AppNavbar onCartClick={() => setShowCart(true)} />
      <ProductsList />
      <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
    </>
  );
}

export default App;
