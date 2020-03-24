const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const registerValidation = require('../../validations/user/RegisterValidation');

const CreateUser = async (req, res) => {

  //Check if user exist
  const userExist = await User.findOne({ userName: req.body.username });
  if (userExist) return res.status(400).send("User already exist");

  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Hash Password
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create user
  const user = await new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    adress: req.body.adress,
    email: req.body.email,
    username: req.body.username,
    password: hashedPassword
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = CreateUser;
