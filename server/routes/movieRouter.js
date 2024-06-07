const movieRouter = require("express").Router();
const {
  addMovie,
  getAllMovies,
  deleteMovie,
  updateMovie,
} = require("../controller/movieController");
const validateJwtToken = require("../middlewares/authMiddleware");

movieRouter.post("/addMovie", validateJwtToken, addMovie);
movieRouter.get("/getAllMovies", validateJwtToken, getAllMovies);
movieRouter.patch("/updateMovie", validateJwtToken, updateMovie);
movieRouter.post("/deleteMovie", validateJwtToken, deleteMovie);

module.exports = movieRouter;
