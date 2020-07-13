const axios = require('axios');
const https = require('https');

// adding custom agent as a workaround for certificate issue when calling swapi.dev
const httpClient = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

module.exports.getAllMoviesByTitle = async (searchTerm) => {
  let data = {};
  try {
    await httpClient
      .get(`https://swapi.dev/api/films/?search=${searchTerm}`)
      .then((response) => {
        data = response.data.results;
      });
    return data;
  } catch (error) {
    console.log('Something went wrong: Service: getAllMoviesByTitle', error);
    throw new Error(error);
  }
};