// import ErrorHandler from "../utils/errorHandlers";

import ErrorHandler from "../utils/errorHandlers";

const onError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  let error = { ...err };

  error.message = err.message;

  //Wrong Mongoose Object ID Error
  if (err.name === "castError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  //Handling mongoose Validation Error
  if (err.name === "ValidationError") {
    const message = Object.keys(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};

export default onError;
