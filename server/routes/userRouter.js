const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUserInfo,
} = require("../controller/userController");
const validateJwtToken = require("../middlewares/authMiddleware");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/getCurrentUser", validateJwtToken, getCurrentUserInfo);

module.exports = userRouter;
