const handler = (err, req, res, next) => {
  const status = err.isBoom ? err.output.statusCode : 500;
  const error = err.isBoom ? err.output.payload.error : "Internal Server Error";
  const message = err.message;

  res.status(status).json({ message, error, status });
};

module.exports = {
  handler,
};
