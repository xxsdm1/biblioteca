(function(){
	'use strict';
	angular.module('app.layout',[])
		.controller('Shell',Shell);

	// Shell.$inject = ['logger','shellService','routehelper','$scope','$cookieStore'];
	function Shell($scope,$cookieStore,$location,routehelper,$state,$window){
		var vm = this;
		console.log("asdasd");
		vm.notificaciones;
		$scope.userConectado={
	       	nombre:"",
	       	apellido:"",
	       	conectado:""
	    };
	    var usr = $cookieStore.get('usuario');
	    
	    if (usr != null) {
	      $scope.userConectado.nombre = usr.codigo;
	      $scope.userConectado.apellido = usr.contrasena;
	      $scope.userConectado.conectado = true;
	    };
	    vm.salir= function(){
	    	$scope.usrConectado = {nombre: "", apellido: '', estaConectado: ''};
        	$cookieStore.remove('estaConectado');
        	$cookieStore.remove('usuario');
        	// $location.path('http://localhost:3000/#/user');
        	$window.location.reload('http://localhost:3000/#/user');
	    }
	
	}

}());