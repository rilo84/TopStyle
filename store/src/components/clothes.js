import React, { useState, useEffect } from "react";
import GetData from "../repo/GetData";

const Clothes = () => {
  const [clothesData, setClothesData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      let data = await GetData();
      console.log(data);
      setClothesData(data);
    };
    fetch();   
  },[]);

  let clothes = clothesData.map(c => {
      return(<div key={c._id}>
        <p>{c.name}</p>
        <img width="150" src={c.imagelink} />
      </div>)
  });
  console.log(clothes);

  return clothes;
};

export default Clothes;
