import React, { createContext, useEffect, useState } from "react";
import GetProductCategory from '../repo/GetProductCategory';
import GetProduct from '../repo/GetProduct';

export const ProductContext = createContext();

const ProductContextProvider = props => {

  const [shoes, setShoes] = useState([]);
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    (async () => {
      let shoesData = await GetProductCategory('Shoes');
      let clothesData = await GetProductCategory('Clothes');
      setShoes(shoesData);
      setClothes(clothesData);
    })();
  }, []);

  const getProduct = async (id) =>{
    let product = await GetProduct(id);
    return product;
  }


  return (
    <ProductContext.Provider value={{shoes, clothes, getProduct}}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
