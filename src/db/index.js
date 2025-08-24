import mongoose from 'mongoose';
import { MONGODB_URL } from '../constants.js';
import ApiError from '../utils/apiErrors.js';

const max_retry = 3;
let base_delay = 1000;

export const dbConnect = async (attempt = 1) => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('DB Connected');
  } catch (error) {
    if (attempt <= max_retry) {
      let delay = base_delay * 2 ** (attempt - 1);
      setTimeout(() => dbConnect(attempt + 1),delay);
      console.log('server not connected, retrying in', attempt, delay);
    } else {
      throw ApiError.customError(500, error.message);
    }
  }
};
