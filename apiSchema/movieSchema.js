const Joi = require('@hapi/joi');

module.exports.getAllMoviesSchema = Joi.object().keys({
  searchTerm: Joi.string().min(1).required(),
});

module.exports.getAllCharactersForTheMovie = Joi.object().keys({
  title: Joi.string().required(),
});
