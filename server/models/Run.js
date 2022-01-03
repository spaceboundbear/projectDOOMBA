const { Schema } = require('mongoose');

const runSchema = new Schema({
  runId: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  duration: {
    type: Number,
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
