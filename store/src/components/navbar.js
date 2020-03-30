import React, {useContext,useEffect} from "react";
import "../styles/navbar.css";
import cartImg from "../images/cart.svg";
import { NavLink } from "react-router-dom";
import {CartContext} from '../contexts/CartContext';

const Navbar = () => {
  const {getCartCount} = useContext(CartContext);
  let cartCount = getCartCount();
  let countElement = document.querySelector(".cartCount");

  useEffect(()=>{
    if(countElement){
      if(cartCount > 0){
        countElement.style.display = "flex";
      }
      else{
        countElement.style.display = "none";
      }
    }
  },[cartCount]);

  return (
    <nav>
      <ul className="leftContent">
        <li>
          <NavLink to="/clothes">Kläder</NavLink>
        </li>
        <li>
          <NavLink to="/shoes">Skor</NavLink>
        </li>
      </ul>
      <ul>
        <li className="middleContent">
          <input type="text" />
          <button>Sök Produkt</button>
        </li>
      </ul>
      <ul className="rightContent">
        <li className="rightItems">
          <NavLink to="/cart">
            Varukorg <img src={cartImg} alt="cart" />
          </NavLink>
          <div className="cartCount">
            <p>{cartCount}</p>
          </div>
        </li>
        <li className="rightItems">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="rightItems">
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
