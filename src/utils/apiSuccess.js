class ApiSuccess {
  constructor(statusCode, message = '', data = {}) {
    this.success = statusCode < 400;
    this.success = success;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export default ApiSuccess;
