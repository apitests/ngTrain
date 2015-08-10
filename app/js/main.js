;(function(){
	'use strict';

	angular
		.module('NgTrain', [
			'ui.router',
			'NgTrain.Site',
			'NgTrain.App',
			'NgTrain.Firebase',
			'ui.bootstrap',
			'Auth',
			'NgTrain.User',
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
		console.log('RunNgTrain');
		console.log($rootScope);
		AuthFactory.setByCookieToken().then(function(){
			$rootScope.user = UserFactory.getUser();
			console.log($rootScope.user);
		});

	}



})();