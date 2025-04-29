const mongoose = require('mongoose');

const pujaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  benefits: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Puja', pujaSchema);