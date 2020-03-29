const CreateOrder = (cart) => {
  let uri = "http://localhost:3001/api/orders/create";
  let token = localStorage.getItem('token');
  
  let total = 0;
  cart.forEach(p => {
      total += (p.amount * p.price);
  });

  let order = {
    "items": cart,
    "total": total
}
  fetch(uri, {
    method:'POST',
    body: JSON.stringify(order),
    headers: {
      token: token,
      "Content-Type": "application/json"
    }
  });
};

export default CreateOrder;