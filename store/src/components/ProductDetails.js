import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { setProduct, currProduct } = useContext(ProductContext);
  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    setProduct(id);
  });

  const add = () => {
      addProduct(currProduct[0]);
  }

  const product = currProduct.map(p => {
    return (
      <div className="productContent" key={p._id}>
        <div className="imgContainer">
          <img src={p.imagelink} />
        </div>
        <div className="sideBar">
          <h1>{p.name}</h1>
          <h4>{p.description}</h4>
          <h2>{p.price} kr inkl.moms</h2>
          <button onClick={add}>Lägg i varukorgen</button>
        </div>
      </div>
    );
  });

  return <section className="productContainer">{product}</section>;
};

export default ProductDetails;
