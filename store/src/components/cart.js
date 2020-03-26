import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, createOrder } = useContext(CartContext);

  const products = cart.map(p => {
    return (
      <>
        <p>{p.name}</p>
        <p>{p.amount}</p>
      </>
    );
  });

  return (
    <div>
      <h1>Cart</h1>
      <p>Du har {cart.length} produkter i din varukorg</p>
      {products}
      <div>
        <button onClick={createOrder}>Betala</button>
      </div>
    </div>
  );
};

export default Cart;
