const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  mediaUrl: { // Field for image or video URL
    type: String,
    required: true,
    trim: true
  },
  mediaType: { // Field to indicate if it's an 'image' or 'video'
    type: String,
    enum: ['image', 'video'],
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  // Add other relevant fields as needed, e.g.,
  // tags: [String],
  // uploader: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // }
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;