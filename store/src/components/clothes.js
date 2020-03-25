import React, { useState, useEffect, useContext } from "react";
import GetData from "../repo/GetData";
import GetProduct from "../repo/GetProduct";
import { CartContext } from "../contexts/CartContext";
import '../styles/clothes.css';

const Clothes = () => {
  const [clothesData, setClothesData] = useState([]);

  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    const fetch = async () => {
      let data = await GetData();
      console.log(data);
      setClothesData(data);
    };
    fetch();
  }, []);

  const handleProduct = async e => {
    let product = await GetProduct(e.target.value);
    console.log(product);
    addProduct(product);
  };

  let clothes = clothesData.map(c => {
    return (
        <div className="productCard" key={c._id}>
          <h3>{c.name}</h3>
          <img width="150" src={c.imagelink} alt={c.name} />
          <p>{c.price} kr</p>
          <button onClick={handleProduct} value={c._id}>
            Köp
          </button>
        </div>
    );
  });
  console.log(clothes);

  return (
    <section className="clothesContainer">
    {clothes}
    </section>
  )
  
};

export default Clothes;
