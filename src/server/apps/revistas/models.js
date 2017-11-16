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
	getRevistas : function(callback){
		 if(connection)
		{	
			var sql ='SELECT*FROM c_revista INNER JOIN c_ejemplar ON c_revista.id_revista = c_ejemplar.id_ejemplar';
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
