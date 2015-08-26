;(function(){
'use strict';

angular
		.module('NgTrain.App', [
			'ui.router',
			'NgTrain.App.Calendar',
			'NgTrain.Category',
			'NgTrain.App.Settings',
			'NgTrain.App.Antro',
			'NgTrain.App.Statistics',
			'NgTrain.App.Exercise',
			'NgTrain.App.Exercises',
			'NgTrain.App.Templates',
		])
		.run(RunApp)
		.config( ConfigApp )
		.constant('APP_SM_WIDTH', 768)
		.controller('AppCtrl', AppController)
	
	// @ngInject
	function ConfigApp($stateProvider){
		$stateProvider.state( 'App', {
			templateUrl: '/modules/app/app.html',	
			controller: 'AppCtrl',
			controllerAs: 'apc', // site controller
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