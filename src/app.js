const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const bcrypt = require ("bcrypt");


var cors = require ('cors');

const app = express();

const hostname = '0.0.0.0';
const port = 3000;
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  )


// Connexion BDD
// protocole://service/nom_bdd
mongoose.connect('mongodb://mongo/apinodeipssi');
//mongoose.connect('mongodb://mongo/' + process.env.DB_NAME);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());


const keywords_route = require('./api/routes/keywords_route');
keywords_route(app);

var Users = require('./api/routes/users_route')

app.use('/users', Users);




app.listen(port, hostname);