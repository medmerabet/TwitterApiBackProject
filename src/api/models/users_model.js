//src / api / models / users_model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let users_schema = new Schema({

  firstname: String,
  lastname: String,
  email: String,
  password: String,
  

  users_id: {
    type: String
  }
});
mongoose.model('Users', users_schema);
module.exports = mongoose.model('Users');