const {
  addTheatre,
  getAllTheatresByOwnerId,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
  addShowToTheatre,
  deleteShow,
  getAllShowsByTheatre,
  getAllTheatresByMovie,
  getShowById,
} = require("../controller/theatreController");
const validateJwtToken = require("../middlewares/authMiddleware");

const theatreRouter = require("express").Router();

theatreRouter.post("/add-theatre", validateJwtToken, addTheatre);
theatreRouter.post(
  "/get-all-theatres-by-owner",
  validateJwtToken,
  getAllTheatresByOwnerId
);
theatreRouter.post("/update-Theatre", validateJwtToken, updateTheatre);
theatreRouter.post("/delete-Theatre", validateJwtToken, deleteTheatre);
theatreRouter.get("/get-all-theatres", validateJwtToken, getAllTheatres);
theatreRouter.post("/add-shows", validateJwtToken, addShowToTheatre);
theatreRouter.post("/delete-show", validateJwtToken, deleteShow);
theatreRouter.post(
  "/get-all-shows-by-theatre",
  validateJwtToken,
  getAllShowsByTheatre
);
theatreRouter.post(
  "/getAllTheatresByMovie",
  validateJwtToken,
  getAllTheatresByMovie
);
theatreRouter.post("/getShowById", validateJwtToken, getShowById);
module.exports = theatreRouter;
