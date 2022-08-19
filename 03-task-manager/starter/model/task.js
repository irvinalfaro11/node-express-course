const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provided name'],
    trim: true,
    maxlength: [20, 'Must be less 20 char'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
