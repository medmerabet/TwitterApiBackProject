//src / api / models / users_model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let users_schema = new Schema({

  fullname: {type : String,
              required:true},
  email: {type : String,
          required: true},
           
  password : {type : String,
            required: true},
  

  users_id: {
    type: String
  }
});
mongoose.model('Users', users_schema);
module.exports = mongoose.model('Users');