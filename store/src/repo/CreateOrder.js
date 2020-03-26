const CreateOrder = (cart) => {
  let uri = "http://localhost:3001/api/orders/create";
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc5MTVlODI1ZmM3NzBjNDQxNDUxYTMiLCJpYXQiOjE1ODUyMjk5NDF9.IQ8JAc24BpPAXP9QzCrNwF_rSqlgwBhrCAf2RMFUTRc";
  
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