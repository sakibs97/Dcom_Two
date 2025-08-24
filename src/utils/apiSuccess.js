class ApiSuccess {
  constructor (statusCode, message, data) {
    this.success = statusCode < 400;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
  static success (message = 'The request succeeded', data = {}) {
    return new ApiSuccess(200, message, data);
  }
  static created (message = 'The request succeeded', data = {}) {
    return new ApiSuccess(201, message, data);
  }
  static accepted (message = 'The request has been received but not yet acted upon.', data = {}) {
    return new ApiSuccess(202, message, data);
  }
  static noAuthoritative (message = 'No Authoritative', data = {}) {
    return new ApiSuccess(203, message, data);
  }
  static noContent (
    message = 'There is no content to send for this request, but the headers are useful.',
    data = {}
  ) {
    return new ApiSuccess(204, message, data);
  }
  static customSuccess (statusCode, message = 'Success', data = {}) {
    return new ApiSuccess(statusCode, message, data);
  }
}

export default ApiSuccess;
