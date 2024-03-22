const Boom = require('@hapi/boom');
const { queries } = require("../schemas/queries");

const validateQueries = (req, res, next) => {
  const { error, value } = queries.validate(req.query, { abortEarly: false });
  if (error) {
    return next(Boom.badRequest(error.message));
  }

  req.query = value;
  next();
};

module.exports = {
  validateQueries,
};
