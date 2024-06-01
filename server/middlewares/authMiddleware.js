const jwt = require("jsonwebtoken");

const validateJwtToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  req.body.userId = decoded.userId;
  next();
  try {
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = validateJwtToken;
