import React, { createContext, useState, useEffect } from "react";
import CreateOrder from "../repo/CreateOrder";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const addProduct = product => {
    const productExist = cart.filter(p => p._id === product._id);

    if (productExist.length === 0) {
      product.amount = 1;
      let newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      incrementProduct(product._id);
    }
  };

  const incrementProduct = id => {
    let currCart = [...cart];
    currCart.forEach(p => {
      if (p._id === id) p.amount += 1;
    });
    setCart(currCart);
    localStorage.setItem("cart", JSON.stringify(currCart));
  };

  const decrementProduct = id => {
    let currCart = [...cart];
    currCart.forEach(p => {
      if (p._id === id && p.amount > 1) {
        p.amount -= 1;
        setCart(currCart);
        localStorage.setItem("cart", JSON.stringify(currCart));
      } else if(p._id === id && p.amount === 1) {
        let filterCart = currCart.filter(p => p._id !== id);
        setCart(filterCart);
        localStorage.setItem("cart", JSON.stringify(filterCart));
      }
    });
  };

  const getCartTotal = () => {
    let total = 0;
    cart.forEach(p => (total += p.amount * p.price));
    return total;
  };

  const getCartCount = () => {
    let total = 0;
    cart.forEach(p => (total += p.amount));
    return total;
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const createOrder = () => {
    CreateOrder(cart);
    window.location.href = '../confirmation';
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        createOrder,
        clearCart,
        incrementProduct,
        decrementProduct,
        getCartTotal,
        getCartCount
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
