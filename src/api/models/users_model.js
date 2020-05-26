//src / api / models / users_model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let users_schema = new Schema({

  name: String,
  age: Number,
  password: String,
  email: String,
  activated: Boolean,

  users_id: {
    type: String
  }
});
mongoose.model('Users', users_schema);
module.exports = mongoose.model('Users');