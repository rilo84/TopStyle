const Product = require("../../models/Product");

const RemoveProduct = async (req, res) => {
  //Authorize
  if (req.user._id != process.env.Admin)
    return res.status(401).send("Användaren har inga admin-rättigheter");

  let products = await Product.findByIdAndDelete(req.params.id);

  if (!products)
    return res.status(404).send("Produkten du vill ta bort finns inte");
  res.send(`${products} togs bort`);
};

module.exports = RemoveProduct;
