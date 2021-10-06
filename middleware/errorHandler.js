const { CustomError } = require("../errors/CustomError");

//Handling the default and custom error.
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: `server not found` });
};

module.exports = errorHandlerMiddleware;
