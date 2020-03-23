const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const loginValidation = require('../../validations/user/LoginValidation');
const Jwt = require('jsonwebtoken');

const LoginUser = async (req, res) => {

  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if user exist
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Username incorrect");

  //Check correct password
  const isValidPassword = await bcrypt.compare(req.body.password,user.password);
  if(!isValidPassword) return res.status(400).send("Password invalid");

  const token = Jwt.sign({_id: user._id},process.env.TokenSecret);

  try {
    await res.header('token',token).send(token);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = LoginUser;