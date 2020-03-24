import React from 'react';
import '../styles/navbar.css';
import cartImg from '../images/cart.svg';

const navbar = () => {
    return (
        <nav>
            <ul className="leftContent">
                <li>Kläder</li>
                <li>Skor</li>
            </ul>
            <ul className="rightContent">
                <li className="rightItems">Varukorg <img src={cartImg} alt="cart" /></li>
                <li className="rightItems">Login</li>
            </ul>
        </nav>
    );
}

export default navbar;