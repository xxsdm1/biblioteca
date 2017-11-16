(function(){
	'use strict';
	angular.module('app.user')
		.controller('user',user);

	user.$inject=['reservasService','$scope','$q','$log','$cookieStore','$state','$location','$window'];
	
	function user(reservasService,$scope,$q,$log,$cookieStore,$state,$location,$window){
		var vm=this;

		var iniciarSesion = $q.defer();
		iniciarSesion.promise.then(userASesion);
		function userASesion(user){
			console.log(user);
			$scope.userConectado.nombre=user.codigo;
			$scope.userConectado.apellido=user.contrasena;
			$scope.userConectado.conectado=true;
			// $log.info("info ",$scope.userConectado);
			// $window.location.reload('http://localhost:3000/#/perfil');
			$cookieStore.put("estaConectado",true);

			$cookieStore.put("usuario",user);
			$location.path('http://localhost:3000/#/perfil');

		};
		vm.sesion={
			codigo: '15121041',
			contrasena: 'ciriusblb'
		}

		vm.iniciar = function(){
			iniciarSesion.resolve(vm.sesion)
		}
		
	}

}());