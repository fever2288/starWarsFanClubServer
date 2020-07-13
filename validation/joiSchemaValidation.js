const constants = require('../constants');

const validateObjectSchema = (data, schema) => {
  const result = schema.validate(data);
  if (result.error) {
    const errorDetails = result.error.details.map((value) => ({
      error: value.message,
      path: value.path,
    }));
    return errorDetails;
  }
  return null;
};

module.exports.validateQueryParams = (schema) => (req, res, next) => {
  const response = { ...constants.serverResponse };
  const error = validateObjectSchema(req.query, schema);
  if (error) {
    response.body = error;
    response.message = constants.movieMessage.BAD_REQUEST;
    return res.status(response.status).send(response);
  }
  return next();
};
