(function(){
	'use strict';
	angular.module('app.services')
		.factory('reservaService',reservaService);

	function reservaService($resource,$stateParams){
		var resource = $resource('/reserva/:idEjemplar',{idEjemplar : '@id'},{ 
			'get':    {method:'GET',isArray: true},
			'query': { method: 'GET', isArray: true},
            'update': { method: 'PUT'},
	        'save': { method: 'POST'},
	        'remove': { method:'DELETE'}
		});

		var services = {
			getEjemplar : getEjemplar
		};
		return services;
		 function getEjemplar(){
		 	console.log("parametro",$stateParams.idEjemplar);
		 	var idEjemplar = $stateParams.idEjemplar;
		 	return resource.get({idEjemplar},function(data){
		 		return data;
		 	});
		 }
	}


}());