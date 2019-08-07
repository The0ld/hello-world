//Funcionalidades Ecmascript 6
'use strict'

//Cargamos models
var User = require('../models/user');

//Conseguir los datos de un usuario
exports.getUser = function(req, res){
	var userId = req.params.id;

	//Buscamos un documento por un id
	User.findById(userId, (err, user) => {
		if(err) return res.status(500).send({message:'Error en la peticion'});

		if(!user) return res.status(404).send({message:'El usuario no existe'});

		followThisUser(req.user.sub, userId).then((value) => {
			user.password = undefined;
			return res.status(200).send({
				user,
				following: value.following,
				followed: value.followed
			});
		});
	});
}
