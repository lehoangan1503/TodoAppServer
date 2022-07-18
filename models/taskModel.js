const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isFinished: {
    type: [{ type: String, enum: ["finish", "doing"] }],
    default: ["doing"],
  },
  todoId: Schema.Types.ObjectId,
});

const plusOneDayForDefaultDueDate = () => {
  const today = new Date();
  today.setDate(today.getDate + 1);
  return today;
};

// a setter for name
taskSchema.path("name").set((inputString) => {
  return inputString[0].toUpperCase() + inputString.slice(1);
});
module.exports = mongoose.model("task", taskSchema);
