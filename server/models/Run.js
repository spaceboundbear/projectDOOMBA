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
  bump: {
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
