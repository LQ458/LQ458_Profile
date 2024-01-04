import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  suggestion: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
});

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message;
