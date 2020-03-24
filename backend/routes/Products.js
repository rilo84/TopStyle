const router = require('express').Router();
const VerifyToken = require('../services/security/VerifyToken');
const CreateProduct = require('../services/products/CreateProduct');
const GetProducts = require('../services/products/GetProducts');
const RemoveProduct = require('../services/products/RemoveProduct');

router.post('/create',VerifyToken, async(req, res) => {
     await CreateProduct(req, res);
});

router.get('/remove/id=:id',VerifyToken, async(req, res) => {
     await RemoveProduct(req, res);
 });

router.get('/', async(req, res) => {
    await GetProducts(req, res);
});

router.get('/id=:id', async(req, res) => {
     await GetProducts(req, res);
 });

 router.get('/cat=:cat', async(req, res) => {
     await GetProducts(req, res);
 });


module.exports = router;