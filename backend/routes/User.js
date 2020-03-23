const router = require('express').Router();
const CreateUser = require('../services/account/CreateUser');
const LoginUser = require('../services/account/LoginUser');

router.post('/register', async(req, res) => {
     await CreateUser(req, res);
});

router.post('/login', async(req, res) => {
    await LoginUser(req, res);
});

module.exports = router;