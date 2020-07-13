const Joi = require('@hapi/joi');

module.exports.getAllMoviesSchema = Joi.object().keys({
  searchTerm: Joi.string().min(1).required(),
});