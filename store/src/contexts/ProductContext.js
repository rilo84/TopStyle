import React, { createContext, useEffect, useState } from "react";
import GetProductCategory from '../repo/GetProductCategory';
import GetProduct from '../repo/GetProduct';

export const ProductContext = createContext();

const ProductContextProvider = props => {

  const [shoes, setShoes] = useState([]);
  const [clothes, setClothes] = useState([]);
  const [currProduct,setCurrProduct] = useState([]);

  useEffect(() => {
    (async () => {
      let shoesData = await GetProductCategory('Shoes');
      let clothesData = await GetProductCategory('Clothes');
      setShoes(shoesData);
      setClothes(clothesData);
    })();
  }, []);

  const setProduct = async (id) =>{
    let product = await GetProduct(id);
    setCurrProduct([product]);
  }


  return (
    <ProductContext.Provider value={{shoes, clothes, currProduct, setProduct}}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
