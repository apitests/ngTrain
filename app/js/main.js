;(function(){
	'use strict';

	angular
		.module('NgTrain', [
			'ui.router',
			'NgTrain.App',
			'NgTrain.Firebase',
			'NgTrain.Site',
			'NgTrain.User',
			'ui.bootstrap',
			'Auth',
		])
		.constant('FIRE_URL', 'https://ngtrain.firebaseio.com/')
		.config(ConfigNgTrain)
		.run(RunNgTrain);

	// @ngInject
	function ConfigNgTrain($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	}

	// @ngInject
	function RunNgTrain(UserFactory, AuthFactory, $rootScope){
		UserFactory.setUserByCookieToken().then(function(){
			$rootScope.user = UserFactory.getUser();
		});

	}



})();