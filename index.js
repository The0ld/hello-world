//Funcionalidades Ecmascript 6
'use strict'

//Modulo de Mongoose para conectar con la BD
var mongoose = require('mongoose');

//Cargar fichero app.js con express configurado
var app = require('./app');

//Variable con el puerto del server
var port = 3000;

//Indicamos a mongoose que se realizara una conexion con promesas
mongoose.Promise = global.Promise;

//Usar el metodo connect para conectar con la base de datos
mongoose.connect('mongodb://localhost:27017/rest_api_node', { useNewUrlParser: true }).then(() => {
	console.log("conexion realizada con exito");

	//crear servidor con nodejs
	app.listen(port, () => {
		console.log("Servidor corriendo en http://localhost:3000");
	});
}).catch(err => console.log(err));