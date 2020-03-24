const router = require('express').Router();
const VerifyToken = require('../services/security/VerifyToken');
const CreateOrder = require('../services/orders/CreateOrder');

router.post('/create',VerifyToken, async(req, res) => {
     await CreateOrder(req, res);
});


module.exports = router;