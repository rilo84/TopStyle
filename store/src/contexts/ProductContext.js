import React, { createContext, useEffect, useState } from "react";
import GetProductCategory from '../repo/GetProductCategory';
import GetProduct from '../repo/GetProduct';
import GetAllProducts from "../repo/GetAllProducts";

export const ProductContext = createContext();

const ProductContextProvider = props => {

  const [shoes, setShoes] = useState([]);
  const [clothes, setClothes] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [currProduct,setCurrProduct] = useState([]);

  useEffect(() => {
    (async () => {
      let shoesData = await GetProductCategory('Shoes');
      let clothesData = await GetProductCategory('Clothes');
      let allData = await GetAllProducts();
      setShoes(shoesData);
      setClothes(clothesData);
      setAllProducts(allData);
    })();
  }, []);

  const setProduct = async (id) =>{
    let product = await GetProduct(id);
    setCurrProduct([product]);
  }


  return (
    <ProductContext.Provider value={{allProducts, shoes, clothes, currProduct, setProduct}}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
