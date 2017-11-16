(function(){
	'use strict';
	angular.module('app.data')
		.factory('revistasService',revistasService);

	function revistasService($resource,$stateParams){
		var resource  =  $resource('/revistas/:idRevista',{idRevista : '@id'},{
			'get':    {method:'GET',isArray : true},
			'query': { method: 'GET',isArray : true },
            'update': { method: 'PUT'},
	        'save': { method: 'POST'  },
	        'remove': { method:'DELETE'},
		});

		var services  = {
			getRevista : getRevista,
			listaRevistas : listaRevistas,
			reservarRevistas : reservarRevistas
		};
		
		return services;

		function getRevista(){
			var idRevista = $stateParams.idRevista;
		 	return resource.get({idRevista},function(data){
		 		return data;
		 	});
		}

		function listaRevistas(){
			return resource.query(function(data){
				return data;
			});
		}

		function reservarRevistas(reserva){
			return resource.save(reserva,function(data){
				return data;
			});
		}




	}

}());