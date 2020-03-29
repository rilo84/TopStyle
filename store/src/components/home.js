import React from 'react';
import '../styles/home.css';
import ClothesImg from '../images/clothes.png';
import ShoesImg from '../images/shoes.png';

const Home = () => {
    return (
        <section className="home">
            <a href="/clothes" className="card">
                <img src={ClothesImg} alt="Clothes" />
                <h3>Shoppa kläder</h3>
            </a>
            <a href="/shoes" className="card">
                <img src={ShoesImg} alt="Shoes" />
                <h3>Shoppa skor</h3>
            </a>
        </section>
    );
}

export default Home;