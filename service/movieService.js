const starWarsExternalService = require('../external/starWarsApiClient');
const helper = require('../helper/helperFunctions');

module.exports.getAllMovies = async ({ searchTerm }) => {
  try {
    const responseFromService = await starWarsExternalService.getAllMoviesByTitle(
      searchTerm,
    );
    const transformedResponse = transformObject(responseFromService);

    return transformedResponse;
  } catch (error) {
    console.log('Something went wrong: Service: getAllMovies', error);
    throw new Error(error);
  }
};

const transformObject = (objects) => {
  const movies = [];
  objects.map((movie) => {
    const transformedMovie = helper.getObjectProperties(
      movie,
      'episode_id',
      'title',
    );
    movies.push(transformedMovie);
  });
  return movies;
};

