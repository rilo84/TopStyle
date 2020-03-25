import React, { useState, useEffect, useContext } from "react";
import GetData from "../repo/GetData";
import GetProduct from "../repo/GetProduct";
import {CartContext} from '../contexts/CartContext';

const Clothes = () => {
  const [clothesData, setClothesData] = useState([]);

  const {addProduct} = useContext(CartContext);

  useEffect(() => {
    const fetch = async () => {
      let data = await GetData();
      console.log(data);
      setClothesData(data);
    };
    fetch();   
  },[]);

  const handleProduct = async (e) =>{
    let product = await GetProduct(e.target.value);
    console.log(product);
    addProduct(product);
  }

  let clothes = clothesData.map(c => {
      return(<div key={c._id}>
        <p>{c.name}</p>
        <img width="150" src={c.imagelink} alt={c.name} />
        <button onClick={handleProduct} value={c._id}>Köp</button>
      </div>)
  });
  console.log(clothes);

  return clothes;
};

export default Clothes;
