import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowerCase: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
  },
  repeatPassword: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  registered: {
    type: Date,
    default: Date.now(),
  },
});
const User = mongoose.model("User", userSchema);
export default User;