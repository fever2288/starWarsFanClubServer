const express = require('express');
const router = express.Router();
const movieController = require('../controller/movieController');
const joiSchemaValidation = require('../validation/joiSchemaValidation');
const movieSchema = require('../apiSchema/movieSchema');

router.get(
  '/movies',
  joiSchemaValidation.validateQueryParams(movieSchema.getAllMoviesSchema),
  movieController.getAllMovies,
);

module.exports = router;
