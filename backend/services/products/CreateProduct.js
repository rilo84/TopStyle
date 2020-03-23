const Product = require('../../models/Product');
const productValidation = require('../../validations/product/ProductValidation');

const CreateProduct = async (req, res) => {

  //Validate
  const { error } = productValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Create product
  const product = await new Product({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    imagelink: req.body.imagelink
  });

  try {
    const savedProduct = await product.save();
    res.send(`Added Product: ${savedProduct}`);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = CreateProduct;
