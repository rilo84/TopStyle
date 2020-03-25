import React from 'react';
import EHandLogo from '../images/ehandlogo.png';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <img src={EHandLogo} alt="ehandel"/>
            <p>Vi levererar till hela Sverige</p>
            <div className="company">
                <p>TopStyle AB</p>
                <p>Toppgatan 99</p>
                <p>127 99 Topsta</p>
                <p>&#169; 2020 TopStyle</p>
            </div>
        </footer>
    );
}

export default Footer;