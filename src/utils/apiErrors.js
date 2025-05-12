class ApiError {
  constructor(statusCode, message, errors, stack) {
    super(message);
    this.success = false;
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      errors.captureStackTrace(this, this.constructor);
    }
  }
  static bdRequest(message = 'invalid request message framing', errors = []) {
    return new ApiError(400, message, errors);
  }
  static unauthorized(
    message = 'Although the HTTP standard specifies "unauthorized"',
    errors = []
  ) {
    return new ApiError(401, message, errors);
  }
  static forbidden(message = 'The client does not have access rights to the content', errors = []) {
    return new ApiError(403, message, errors);
  }
  static notFound(message = 'The server cannot find the requested resource.', errors = []) {
    return new ApiError(404, message, errors);
  }
  static conflict(
    message = 'This response is sent when a request conflicts with the current state of the server.',
    errors = []
  ) {
    return new ApiError(409, message, errors);
  }
  static gone(message = 'content has been permanently deleted from server', errors = []) {
    return new ApiError(410, message, errors);
  }
  static coustomError(statusCode, message = 'Error', errors = []) {
    return new ApiError(statusCode, message, errors);
  }
}
