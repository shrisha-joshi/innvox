const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true }, // URL to the image or video
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Gallery', gallerySchema);