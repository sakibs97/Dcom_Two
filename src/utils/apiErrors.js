class ApiError{
    constructor(statusCode, message, errors, stack){
        super(message)
        this.success = false
        this.statusCode= statusCode
        this.message = message
        this.errors = errors
        if (stack) {
            this.stack = stack
        }else{
            errors.captureStackTrace(this, this.constructor);
        }
    }
}