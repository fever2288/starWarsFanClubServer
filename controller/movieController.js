const movieService = require('../service/movieService');
const constants = require('../constants');

module.exports.getAllMovies = async (req, res) => {
  const response = { ...constants.serverResponse };
  try {
    const responseFromService = await movieService.getAllMovies(req.query);
    response.message = constants.movieMessage.MOVIES_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    response.message = error.message;
    response.status = 400;
  }
  return res.status(response.status).send(response);
};
module.exports.getAllCharactersForTheMovie = async (req, res) => {
  const response = { ...constants.serverResponse };
  try {
    const responseFromService = await movieService.getAllCharactersForTheMovie(
      req.query,
    );
    response.message = constants.movieMessage.CHARACTERS_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    console.log('Something went wrong: Controller: getAllMovies', error);
    response.message = error.message;
    response.status = 400;
  }
  return res.status(response.status).send(response);
};
