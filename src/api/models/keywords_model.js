// src/api/models/keywords_model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let keywords_schema = new Schema({
  keywords: {
    type: String,
    required: true
  },
  keywords_id: {
    type: String
  }
});

mongoose.model('Keywords', keywords_schema);

module.exports = mongoose.model('Keywords');