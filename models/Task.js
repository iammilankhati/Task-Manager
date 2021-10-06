const mongoose = require("mongoose");

//Datastructure for task project
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  completed: { type: Boolean },
});

module.exports = mongoose.model("Task", TaskSchema);
