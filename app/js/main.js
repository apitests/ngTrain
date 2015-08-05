;(function(){
	'use strict';

	angular
		.module('NgTrain', [
			'ui.router',
			'NgTrain.Site',
			'NgTrain.Firebase',
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
	
	function RunNgTrain(){
		console.log('RunNgTrain');
	}


})();