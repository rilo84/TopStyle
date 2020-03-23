const Jwt = require("jsonwebtoken");

const VerifyUser = (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verifiedUser = Jwt.verify(token, process.env.TokenSecret);
    req.user = verifiedUser;
    next();
  } catch (error) {
    res.status(400).send("Token is invalid");
  }
};

module.exports = VerifyUser;