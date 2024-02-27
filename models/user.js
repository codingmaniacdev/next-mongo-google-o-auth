import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: true
  }
);

const User = models.User || mongoose.model('User', userSchema);

export default User;