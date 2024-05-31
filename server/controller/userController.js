const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const userExists = await userModel.findOne({ email: req.body?.email });
    if (userExists) {
      return res.status(200).json({
        success: false,
        message: "user already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body?.password, salt);
    req.body.password = hashedPassword;
    const user = new userModel(req.body);
    const response = await user.save();
    res.status(200).json({
      success: true,
      response: response,
      message: "registration successful, please login",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error || "user has entered invalid information",
    });
  }
};

module.exports = {
  registerUser,
};
