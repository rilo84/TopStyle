import React, { createContext, useState, useEffect } from "react";
import CreateOrder from '../repo/CreateOrder';

export const CartContext = createContext();

const CartContextProvider = props => {

  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const storedCart = JSON.parse(localStorage.getItem('cart')); 
    if(storedCart){
      setCart(storedCart);
    }
  },[]);
 
  const addProduct = product => {
    const productExist = cart.filter(p => p._id === product._id);

    if (productExist.length === 0) {
      product.amount = 1;
      let newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      cart.forEach(p => {
        if (p._id === product._id) {
          p.amount += 1;
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      });
    }
  };

  const clearCart = () => {
    localStorage.clear('cart');
    setCart([]);
  }

  const createOrder = () =>{
    CreateOrder(cart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, createOrder, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
