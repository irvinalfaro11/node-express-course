const { customAPIError } = require('../errors/custom-errors');
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statuscode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: 'Something went wrong, please try again later.' });
};

module.exports = errorHandlerMiddleware;
