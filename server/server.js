const express = require("express");
require("dotenv").config();

const app = express();
const dbConfig = require("./config/dbConfig");
const userRouter = require("./routes/userRouter");
const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/app/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
