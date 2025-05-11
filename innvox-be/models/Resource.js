const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  url: { // URL to the resource file or link
    type: String,
    required: true,
    trim: true
  },
  // Add any other relevant fields here
  // For example, tags, category, uploader reference, etc.
  // tags: [String],
  // category: String,
  // uploader: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // }
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;