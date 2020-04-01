const GetOrders = async () => {
    let uri = "http://localhost:3001/api/orders";
    let token = localStorage.getItem("token");
    let result;
  
    await fetch(uri, {
      method: "GET",
      headers: {
        token: token,
        "Content-Type": "application/json"
      }
    })
      .then(res => result = res.json())
  
      return result;
  };
  
  
  export default GetOrders;