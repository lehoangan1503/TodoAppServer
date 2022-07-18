const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plusOneDayForDefaultDueDate = () => {
  const today = new Date();
  today.setDate(today.getDate() + 1);

  return today;
};
const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  dueDate: {
    type: Date,
    default: plusOneDayForDefaultDueDate(),
  },
});
// a setter for name
todoSchema.path("name").set((inputString) => {
  return inputString[0].toUpperCase() + inputString.slice(1);
});
module.exports = mongoose.model("todo", todoSchema);
