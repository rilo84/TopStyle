import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import '../styles/clothes.css';

const Clothes = () => {
  const { addProduct } = useContext(CartContext);
  const { clothes, getProduct } = useContext(ProductContext);

  const handleProduct = async e => {
    let product = await getProduct(e.target.value);
    console.log(product);
    addProduct(product);
  };

  const clothesData = clothes.map(c => {
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

  return (
    <section className="clothesContainer">
    {clothesData}
    </section>
  )
  
};

export default Clothes;
