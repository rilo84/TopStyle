import React, {useState, useEffect} from "react";
import GetUser from "../repo/GetUser";
import GetOrders from "../repo/GetOrders";

import '../styles/mypage.css';

const MyPage = () => {
  const [user, setUser] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    const fetch = async () => {
        let userData = await GetUser();
        let orders = await GetOrders();
        setUser(userData);
        setOrders(orders);
    }
    fetch();
  },[]);

  let orderData = orders.map(o => {
    let date = new Date(o.date).toLocaleDateString();

    return (<>
    <div className="orderCard" key={o._id}>
      <p>Datum: {date}</p>
      <p>Ordertotal: {o.total} kr</p>
    </div>
    </>)
  })

  return (
    <div className="mypageContainer">
      <h1>Välkommen {user.firstName} {user.lastName}</h1>
      <h3>Du har gjort {orders.length} ordrar</h3>
      {orderData}
    </div>);
  
};

export default MyPage;
