const Order = require('../../models/Order');
const productValidation = require('../../validations/product/ProductValidation');

const CreateOrder = async (req, res) => {

//   //Validate
//   const { error } = productValidation(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

  //Create order
  const order = await new Order({
      customer: req.user._id,
      items: [req.body.items],
      total: req.body.total
  });

  try {
    const savedOrder = await order.save();
    res.send(`Added Order: ${savedOrder}`);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = CreateOrder;
