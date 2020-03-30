import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/cart.css";

const Cart = () => {
  const { cart, createOrder, clearCart, incrementProduct, decrementProduct, getCartTotal } = useContext(CartContext);
  let products;
  let payButton = document.querySelector(".payButton");
  useEffect(()=>{
    let token = localStorage.getItem('token');
    if(token){
      console.log(token);
      if(payButton) payButton.style.display = "initial";
    }
    else{
      if(payButton) payButton.style.display = "none";
    }
  },[])

  const handleAdd = async e => {
    await incrementProduct(e.target.id);
  }

  const handleDel = async e =>{
    await decrementProduct(e.target.id);
  }

  if (cart.length === 0) {
    products = <p>Varukorgen är tom</p>;
  } else {
    products = cart.map(p => {
      return (
        <div className="cartCard" key={p._id}>
          <div className="amount">
            <h3 className="changeAmount" id={p._id} onClick={handleDel} >-</h3>
            <h3>{p.amount} st</h3>
            <h3 className="changeAmount" id={p._id} onClick={handleAdd}>+</h3>
          </div>
          <div className="prodImage">
            <img src={p.imagelink} alt={p.name} />
          </div>
          <div className="details">
            <h3>{p.name}</h3>
            <h3>{p.amount} x {p.price} kr</h3>
            <h3>Totalt {p.price * p.amount} kr</h3>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="cartContainer">
      <h3>Din varukorg</h3>
      {products}
      <div className="totalContainer">
        <h3>Totalt {getCartTotal()} kr inkl.moms</h3>
      </div>
      <div className="cartButtonContainer">
        <button className="payButton" onClick={createOrder}>Betala</button>
        <button onClick={clearCart}>Rensa varukorg</button>
      </div>
    </div>
  );
};

export default Cart;
