import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "please provide a fullName"],
  },
  email: {
    type: String,
    required: [true, "please provide an email"],
    lowerCase: true,
  },
  content: {
    type: String,
  },
  sendAt: {
    type: Date,
    default: new Date(Date.now()),
  },
});
const message = mongoose.model("Message", messageSchema);
export default message;
