const movieModel = require("../model/movieModel");

const addMovie = async (req, res) => {
  try {
    const newMovie = new movieModel(req.body);
    await newMovie.save();
    res.send({
      success: true,
      message: "Movie added successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieModel.find();
    res.send({
      success: true,
      data: movies,
      message: "Movies fetched successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    await movieModel.findByIdAndDelete(req.body._id);
    res.send({
      success: true,
      message: "Movie deleted successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const updateMovie = async (req, res) => {
  try {
    await movieModel.findByIdAndUpdate(req.body._id, req.body);
    res.send({
      success: true,
      message: "Movie updated successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  deleteMovie,
  updateMovie,
};
