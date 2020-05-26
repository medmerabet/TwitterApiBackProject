const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const hostname = '0.0.0.0';
const port = 3000;

// Connexion BDD
// protocole://service/nom_bdd
mongoose.connect('mongodb://mongo/apinodeipssi');
//mongoose.connect('mongodb://mongo/' + process.env.DB_NAME);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const keywords_route = require('./api/routes/keywords_route');
keywords_route(app);

const users_route = require('./api/routes/users_route');
users_route(app);




app.listen(port, hostname);