(function(){
	'use strict';
	angular.module('app.services')
		.factory('revistaService',revistaService);

	function revistaService($resource){
		var resource  =  $resource('/revistas',{},{
			'get':    {method:'GET'},
			'query': { method: 'GET',isArray : true},
            'update': { method: 'PUT'},
	        'save': { method: 'POST'  },
	        'remove': { method:'DELETE'},
		});

		var services = {
			listaRevistas : listaRevistas,
			postReserva : postReserva
		};
		return services;

		function listaRevistas(){
			return resource.query(function(data){
				return data;
			}); 
		}
		function postReserva(ejemplar){
			return resource.save(ejemplar,function(data){
				return data;
			});
		}

	}

}());