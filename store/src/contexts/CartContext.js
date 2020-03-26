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
      setCart([...cart, product]);
    } else {
      cart.forEach(p => {
        if (p._id === product._id) {
          p.amount += 1;
        }
      });
    }
    
    localStorage.setItem('cart',JSON.stringify(cart));
  };

  const createOrder = () =>{
    CreateOrder(cart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, createOrder }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
