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

  const incrementProduct = (id) =>{
    let currCart = [...cart];
    currCart.forEach(p => {
      if(p._id === id) p.amount += 1;
    });
    setCart(currCart);
    localStorage.setItem('cart', JSON.stringify(currCart));
  }

  const decrementProduct = (id) =>{
    let currCart = [...cart];
    currCart.forEach(p => {
      if(p._id === id && p.amount > 1){
        p.amount -= 1;
        setCart(currCart);
        localStorage.setItem('cart', JSON.stringify(currCart));
      }
      else{
        let filterCart = currCart.filter(p=> p._id !== id);
        setCart(filterCart);
        localStorage.setItem('cart', JSON.stringify(filterCart));
      }
    });
  }

  const getCartTotal = () =>{
    let total =0;
    cart.forEach(p => total += (p.amount * p.price));
    return total;
  }

  const clearCart = () => {
    localStorage.clear('cart');
    setCart([]);
  }

  const createOrder = () =>{
    CreateOrder(cart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, createOrder, clearCart, incrementProduct, decrementProduct, getCartTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
