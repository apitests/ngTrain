;(function(){

'use strict';


angular
		.module('NgTrain.App.Settings', [
			'ui.router',
		])

		.run(RunSettings)
		.config( ConfigSettings )
		.controller('SettingsCtrl', SettingsController)
	
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
			controllerAs: 'cc', // site controller
		})
	}

	// @ngInject
	function SettingsController($rootScope, $state){
		// $state.transitionTo('Settings.Home');
		var s = this;
		s.name = 'Settings';
	}

	function RunSettings(){
	}

})()