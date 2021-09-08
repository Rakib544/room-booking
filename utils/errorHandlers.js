class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
