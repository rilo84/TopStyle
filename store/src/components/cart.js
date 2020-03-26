import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import '../styles/cart.css';

const Cart = () => {
  const { cart, createOrder } = useContext(CartContext);

  const products = cart.map(p => {
    return (
      <>
        <p>{p.amount} st {p.name} {p.price*p.amount} kr</p>
      </>
    );
  });

  return (
    <div className="cartContainer">
      <h3>Din varukorg</h3>
      {products}
      <div>
        <button onClick={createOrder}>Betala</button>
      </div>
    </div>
  );
};

export default Cart;
