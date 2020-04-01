const Order = require("../../models/Order");

const GetOrder = async (req, res) => {
  //Check if user has orders
  const orders = await Order.find({customer: req.user})
  if (!orders) return res.status(400).send("No orders");

  try {
    await res.send(orders);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = GetOrder;