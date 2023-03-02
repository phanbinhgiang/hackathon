const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, 'must provide token id'],
      trim: true,
    },

    name: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    image: {
      type: String,
      required: [true, 'must provide link image'],
      trim: true,
    },

    type: {
      type: String,
      required: [true, 'must provide type'],
      trim: true,
    },

    owner: {
      type: String,
      required: [true, 'must provide name of owner'],
      trim: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Task', TaskSchema)
