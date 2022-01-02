const { Schema } = require('mongoose');

const runSchema = new Schema({
  runId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  duration: {
    type: Number,
    required: true,
  },
  bumpLeft: {
    type: Number,
  },
  bumpRight: {
    type: Number,
  },
  stops: {
    type: Number,
  },
  left: {
    type: Number,
  },
  right: {
    type: Number,
  },
});

module.exports = runSchema;
