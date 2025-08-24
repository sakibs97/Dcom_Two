import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      upperCase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
      trim: true,
    },
    password: {
      type: true,
      default: null,
    },
    emailVerified: {
      default: false,
    },
    forgotPassword: {
      type: Number,
    },
    forgotPasswordExpire: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model.User || mongoose.model('User', userSchema);
