import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

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
      <p>Du har {cart.length} i din varukorg</p>
      {products}
    </div>
  );
};

export default Cart;
