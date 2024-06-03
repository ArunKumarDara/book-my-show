const movieRouter = require("express").Router();
const {
  addMovie,
  getAllMovies,
  deleteMovie,
  updateMovie,
} = require("../controller/movieController");

movieRouter.post("/addMovie", addMovie);
movieRouter.get("/getAllMovies", getAllMovies);
movieRouter.patch("/updateMovie", updateMovie);
movieRouter.post("/deleteMovie", deleteMovie);

module.exports = movieRouter;
