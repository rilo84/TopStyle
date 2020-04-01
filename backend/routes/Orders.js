const router = require('express').Router();
const VerifyToken = require('../services/security/VerifyToken');
const CreateOrder = require('../services/orders/CreateOrder');
const GetOrders = require('../services/orders/GetOrders');

router.post('/create',VerifyToken, async(req, res) => {
     await CreateOrder(req, res);
});

router.get('/',VerifyToken, async(req, res) => {
     await GetOrders(req, res);
});

module.exports = router;