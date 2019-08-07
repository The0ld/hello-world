//Funcionalidades Ecmascript 6
'use strict'

//Cargamos express para crear las rutas
var express = require('express');

//cargamos el controlador
var UserController = require('../controllers/user');

//llamamos al router
var api = express.Router();

//cargamos el middleware
var md_auth = require('../middlewares/authenticated.js');

//creamos una ruta para los metodo que tenemos en el controlador
api.get('/user/:id', md_auth.ensureAuth, UserController.getUser);

//exportamos la configuracion
module.exports = api;
