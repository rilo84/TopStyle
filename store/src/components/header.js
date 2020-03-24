import React from 'react';
import logoImg from '../images/logo.svg';
import '../styles/header.css';

const header = () => {
    return (
        <header>
            <img src={logoImg} alt="logo" />
        </header>
    );
}

export default header;