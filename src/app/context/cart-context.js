"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === product.id);
      if (existingItem) {
        return previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    return [
      ...previousItems,
      {
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        initialPrice: product.oldPrice,
        quantity: 1,
      },
    ];
    })
    
  }

  function increment(id) {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrement(id) {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }
  function removeFromCart(id) {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  }

  let totalPrice = 0;
  for (const item of cartItems) {
    totalPrice += parseFloat(item.price) * item.quantity;
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increment,
        decrement,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
