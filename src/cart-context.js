import { createContext, useContext, useState } from "react";

const deafaultCartValue = {
  items: 6,
  cartLogger: () => console.log("logging.......")
};

const CartContext = createContext({ deafaultCartValue });

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(0);
  const addToCart = () => setItems((items) => items + 1);
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
