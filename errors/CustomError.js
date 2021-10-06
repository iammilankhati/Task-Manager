class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

//create a new error
const createCustomError = (message, statusCode) => {
  return new CustomError(message, statusCode);
};

module.exports = {
  CustomError,
  createCustomError,
};
