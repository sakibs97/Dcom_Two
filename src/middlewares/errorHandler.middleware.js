import ApiError from '../utils/apiErrors.js';

const errorhandler = (err, req, res, next) => {
  res
    .status(err.statuscode || 500)
    .json(ApiError.customError(err.statuscode, err.message, err.error));
};

export default errorhandler;
