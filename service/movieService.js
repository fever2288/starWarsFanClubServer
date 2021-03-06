const starWarsExternalService = require('../external/starWarsApiClient');
const charactersService = require('./characterService');
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

module.exports.getAllCharactersForTheMovie = async ({ title }) => {
  try {
    const responseFromService = await starWarsExternalService.getAllMoviesByTitle(
      title,
    );

    if (responseFromService.length !== 1) throw new Error('More then one movie found');

    const { characters } = responseFromService[0];
    const response = await charactersService.getIndividualCharacters(characters);

    return response;
  } catch (error) {
    console.log(
      'Something went wrong: Service: getAllCharactersForTheMovie',
      error,
    );
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
