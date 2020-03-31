const router = require('express').Router();
const VerifyToken = require('../services/security/VerifyToken');
const CreateUser = require('../services/account/CreateUser');
const LoginUser = require('../services/account/LoginUser');
const GetUser = require('../services/account/GetUser');

router.post('/register', async(req, res) => {
     await CreateUser(req, res);
});

router.post('/login', async(req, res) => {
    await LoginUser(req, res);
});

router.get('/',VerifyToken, async(req, res) => {
    await GetUser(req, res);
});

module.exports = router;