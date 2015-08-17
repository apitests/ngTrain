;(function(){

'use strict';


angular
		.module('NgTrain.App.Templates', [
			'ui.router',
		])

		.run(RunTemplates)
		.config( ConfigTemplates )
		.controller('TemplatesCtrl', TemplatesController)
	
	// @ngInject
	function ConfigTemplates($stateProvider){
		$stateProvider.state( 'App.Templates', {
			url: '/app/tpl',
			views: {
				'sidebar' : {
					templateUrl: '/modules/app/tpl/sidebar.html',	
				}, 
				'content' : {
					templateUrl: '/modules/app/templates/templates.html',
				}
			},
			controller: 'TemplatesCtrl',
			controllerAs: 'tc', // site controller
		})
	}

	// @ngInject
	function TemplatesController($rootScope, $state){
		// $state.transitionTo('Templates.Home');
		var s = this;
		s.name = 'Templates';
	}

	function RunTemplates(){
	}

})()