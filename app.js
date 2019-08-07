//Funcionalidades Ecmascript 6
'use strict'

//Cargamos los modulos express y body-parser
var express = require('express');
var bodyParser = require('body-parser');

//llamamos express para poder crear el server
var app = express();

//importamos las rutas
var user_routes = require('./routes/user');

//configuramos bodyparser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cargamos rutas
app.use('/rest_api_node', user_routes);

//exportamos este modulo para poder usar la variable app fuera del archivo
module.exports = app;