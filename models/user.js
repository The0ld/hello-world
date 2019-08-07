//Funcionalidades Ecmascript 6
'use strict'

//cargamos mongoose
var mongoose = require('mongoose');

//usaremos esquemas
var Schema = mongoose.Schema;

//Creamos el objeto del esquema y sus atributos
var UserSchema = Schema({
	name:String,
	surname:String,
	nick:String,
	email:String,
	password:String,
	role:String,
	image:String
});

//Exportamos el modelo

module.exports = mongoose.model('User', UserSchema);
