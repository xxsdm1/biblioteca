(function(){
	'use strict';
	angular.module('app.user')
		.run(appRun);

	appRun.$inject = ['routehelper'];

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes(){
		return [{
			name : 'user',
			config : {
				url : '/user',
				templateUrl : 'app/user/user.html',
				controller : 'user as vm',
				title : 'user'
			}
		}];
	}

}());