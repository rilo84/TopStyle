import React from 'react';
import '../styles/navbar.css';
import cartImg from '../images/cart.svg';

const navbar = () => {
    return (
        <nav>
            <ul>
                <li>Kläder</li>
                <li>Skor</li>
                <li>Varukorg <img src={cartImg} alt="cart" /></li>
            </ul>
        </nav>
    );
}

export default navbar;