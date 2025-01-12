import React, { createContext, useState, ReactNode } from 'react';

export interface CartContextType {
  cartCount: number;
  cartItems: string[]; // Store the list of item titles or IDs
  addToCart: (title: string) => void;
  removeFromCart: (title: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<string[]>([]); // Track cart items by title
  const cartCount = cartItems.length; // Calculate cart count

  const addToCart = (title: string) => {
    setCartItems((prevItems) => [...prevItems, title]);
  };

  const removeFromCart = (title: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== title));
  };

  return (
    <CartContext.Provider value={{ cartCount, cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
