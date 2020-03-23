const router = require('express').Router();
const VerifyToken = require('../services/security/VerifyToken');
const CreateProduct = require('../services/products/CreateProduct');
// const GetProducts = require('../services/products/GetProducts');

router.post('/create', async(req, res) => {
     await CreateProduct(req, res);
});

// router.post('/', async(req, res) => {
//     await GetProducts(req, res);
// });

module.exports = router;