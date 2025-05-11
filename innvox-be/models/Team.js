const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
  imageUrl: { type: String },
  socialLinks: [{ type: String }], // Array of social media links
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Team', teamSchema);