import React from 'react';
import '../styles/navbar.css';
import cartImg from '../images/cart.svg';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className="leftContent">
                <li><NavLink to="/clothes">Kläder</NavLink></li>
                <li>Skor</li>
            </ul>
            <ul className="rightContent">
                <li className="rightItems"><NavLink to="/cart">Varukorg <img src={cartImg} alt="cart" /></NavLink></li>
                <li className="rightItems">Login</li>
            </ul>
        </nav>
    );
}

export default Navbar;