(function(){
	'use strict';
	angular.module('app.widgets')
		.directive('ngBuscar', ngBuscar);


	function ngBuscar(){
		var config = {
			templateUrl : 'app/widgets/widgetBuscar/rtBuscarTemplate.html',
			restrict : 'E'
		};

		return config;
	}
	
}());