;(function(){
'use strict';

angular
		.module('NgTrain.App', [
			'ui.router',
			'NgTrain.App.Calendar',
			'NgTrain.App.Settings'
		])
		.run(RunApp)
		.config( ConfigApp )
		.controller('AppCtrl', AppController)
	
	// @ngInject
	function ConfigApp($stateProvider){
		$stateProvider.state( 'App', {
			templateUrl: '/modules/app/app.html',	
			controller: 'AppCtrl',
			controllerAs: 'ac', // site controller
		})
	}

	// @ngInject
	function AppController($rootScope, $state, UserFactory){
		$rootScope.user = UserFactory.getUser();
		var s = this;
		return s;

	}

	function RunApp(){
	}


})()