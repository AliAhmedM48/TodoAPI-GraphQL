const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['todo', 'in_progress', 'complete'],
    default: 'todo'
  },
});

module.exports = mongoose.model('Task', taskSchema, "TaskQl");
