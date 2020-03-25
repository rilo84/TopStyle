import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [cart, setCart] = useState([]);

  const addProduct = product => {
    const productExist = cart.filter(p => p._id === product._id);

    if (productExist.length === 0) {
      product.amount = 1;
      setCart([...cart, product]);
    } else {
      cart.forEach(p => {
        if (p._id === product._id) {
          p.amount += 1;
        }
      });
    }
  };
  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
