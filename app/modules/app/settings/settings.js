;(function(){

'use strict';

angular
		.module('NgTrain.App.Settings', [
			'ui.router',
		])

		.run(RunSettings)
		.config( ConfigSettings )
		.controller( 'SettingsCtrl', SettingsController )
	
	// @ngInject
	function ConfigSettings($stateProvider){
		$stateProvider.state( 'App.Settings', {
			url: '/app/settings',
			views: {
				'sidebar' : {
					templateUrl: '/modules/app/tpl/sidebar.html',	
				}, 
				'content' : {
					templateUrl: '/modules/app/settings/settings.html',
				}
			},
			controller: 'SettingsCtrl',
			controllerAs: 'sc', // Settings controller
		})
	}

	// @ngInject
	function SettingsController(){
	}

	function RunSettings(){
	}

})()