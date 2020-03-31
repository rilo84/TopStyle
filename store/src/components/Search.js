import React, { useContext } from "react";
import { useParams} from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import "../styles/clothes.css";

const Search = () => {
  const { allProducts } = useContext(ProductContext);
  const { word } = useParams();

  let resultFilter = allProducts;
  if (word) {
    resultFilter = allProducts.filter(
      p => p.name.toLowerCase().indexOf(word.toLowerCase()) !== -1
    );
  }
  const resultData = resultFilter.map(c => {
    return (
      <a href={`../product/${c._id}`} className="productCard" key={c._id}>
        <h3>{c.name}</h3>
        <img width="150" src={c.imagelink} alt={c.name} />
        <p>{c.price} kr</p>
      </a>
    );
  });

  return <section className="clothesContainer">{resultData}</section>;
};

export default Search;
