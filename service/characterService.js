const starWarsExternalService = require('../external/starWarsApiClient');
const helper = require('../helper/helperFunctions');

module.exports.getIndividualCharacters = async (characters) => {
  try {
    const data = await Promise.all(
      characters.map(async (route) => {
        try {
          const character = await starWarsExternalService.getCharacter(route);
          const transformedCharacter = helper.getObjectProperties(
            character,
            'name',
            'height',
            'birth_year',
            'gender',
            'mass',
          );
          return transformedCharacter;
        } catch (error) {
          console.log(
            'Something went wrong: Service: getIndividualCharacters',
            error,
          );
          throw new Error(error);
        }
      }),
    );

    return data;
  } catch (error) {
    console.log('Something went wrong: Service: getIndividualCharacters', error);
    throw new Error(error);
  }
};
