const { queries } = require("../schemas/queries");

const validateQueries = (req, res, next) => {
  const { error, value } = queries.validate(req.query, { abortEarly: false });
  if (error) {
    return next(error);
  }

  req.query = value;
  next();
};

module.exports = {
  validateQueries,
};
