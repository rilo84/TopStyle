import React from "react";
import vanImg from '../images/van.svg';
import '../styles/confirmation.css';

const OrderConfirmation = () => {
  return (
    <div className="confirmContainer">
      <h1>Din order är nu påväg!</h1>
      <img src={vanImg} alt="delivery" />
    </div>
  );
};

export default OrderConfirmation;
