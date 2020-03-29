import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/cart.css";

const Cart = () => {
  const { cart, createOrder, clearCart } = useContext(CartContext);

  let products;
  
  if (cart.length === 0) {
    products = <p>Varukorgen är tom</p>
  } else {
    products = cart.map(p => {
      return (
        <div key={p._id}>
          <p>
            {p.amount} st {p.name} {p.price * p.amount} kr
          </p>
        </div>
      );
    });
  }
  return (
    <div className="cartContainer">
      <h3>Din varukorg</h3>
      {products}
      <div>
        <button onClick={createOrder}>Betala</button>
        <button onClick={clearCart}>Rensa varukorg</button>
      </div>
    </div>
  );
};

export default Cart;
