const Product = require("../../models/Product");

const GetProducts = async (req, res) => {
  let products;

  if (req.params.id) {
    products = await Product.findById(req.params.id).catch(() =>
      res.status(404).send("Produkten kunde inte hittas")
    );
    res.send(products);
  }
  
  else if (req.params.cat){
    products = await Product.find({category:req.params.cat}).catch(() =>
    res.status(404).send("Produkten kunde inte hittas")
  );

  if(!products) return res.status(404).send("Produkten kunde inte hittas");
  res.send(products);
  }
  else {
    products = await Product.find();
    res.send(products);
  }
};

module.exports = GetProducts;
