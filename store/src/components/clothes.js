import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import '../styles/clothes.css';

const Clothes = () => {
  const { clothes } = useContext(ProductContext);

  const clothesData = clothes.map(c => {
    return (
        <a href={`product/${c._id}`} className="productCard" key={c._id}>
          <h3>{c.name}</h3>
          <img width="150" src={c.imagelink} alt={c.name} />
          <p>{c.price} kr</p>
        </a>
    );
  });

  return (
    <section className="clothesContainer">
    {clothesData}
    </section>
  )
  
};

export default Clothes;
