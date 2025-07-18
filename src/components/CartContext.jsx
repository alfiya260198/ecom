import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');

  // 👇 Cart Logic
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.title === product.title);
      if (existing) {
        return prevItems.map(item =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (title) => {
    setCartItems(prev => prev.filter(item => item.title !== title));
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // 👇 Auth logic
  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalQuantity,
        token,
        login,
        logout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
