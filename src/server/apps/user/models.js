'use strict';
var mysql = require('../../config/mysql');

var connection=mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'bibliotecadb',
   port: 3306
});
var dataModels ={
	getNotificaciones : function(idUsuario,callback){
		if(connection)
		{	
			var sql ='SELECT*FROM c_notificaciones WHERE id_usuario='+connection.escape(idUsuario)+' and estado = 0';
			connection.query(sql, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
		}
	},
	actuaNotificacion : function(idNotificacion,callback){
		if(connection)
		{	
			var sql ='UPDATE c_notificaciones SET estado=1 WHERE id_notificacion='+connection.escape(idNotificacion)+'';
			connection.query(sql, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
		}
	},
	getNotificaciones : function(idUser,callback){
		if(connection)
		{	
			var sql ='SELECT*FROM c_notificaciones  WHERE id_usuario='+connection.escape(idUser)+' and estado=1';
			connection.query(sql, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
		}
	}
};

module.exports = dataModels;
