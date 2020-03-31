const User = require("../../models/User");

const GetUser = async (req, res) => {
  //Check if user exist
  const user = await User.findById(req.user);
  if (!user) return res.status(400).send("User not found");

  try {
    await res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = GetUser;
