import React from 'react';
import logoImg from '../images/logo.svg';
import {NavLink} from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    return (
        <header>
            <NavLink to="/"><img src={logoImg} alt="logo" /></NavLink>
        </header>
    );
}

export default Header;