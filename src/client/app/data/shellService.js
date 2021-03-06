(function(){
	'use strict';

	angular.module('app.data')
		.factory('shellService',shellService);


	function shellService($resource,$stateParams){

		var resource  =  $resource('/notificaciones',{},{
			'get':    {method:'GET',isArray : true},
			'query': { method: 'GET',isArray : true },
		});

		var services = {
			getNotificaciones : getNotificaciones,
		};

		return services;

		function getNotificaciones(){
			return resource.get(function(data){
				return data;
			});
		}
	}
}());