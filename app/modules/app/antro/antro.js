;(function(){

'use strict';


angular
		.module('NgTrain.App.Antro', [
			'ui.router',
		])

		.run(RunAntro)
		.config( ConfigAntro )
		.controller('AntroCtrl', AntroController)
	
	// @ngInject
	function ConfigAntro($stateProvider){
		$stateProvider.state( 'App.Antro', {
			url: '/app/antro',
			views: {
				'sidebar' : {
					templateUrl: '/modules/app/tpl/sidebar.html',	
				}, 
				'content' : {
					templateUrl: '/modules/app/antro/antro.html',
				}
			},
			controller: 'AntroCtrl',
			controllerAs: 'ac', // site controller
		})
	}

	// @ngInject
	function AntroController( $rootScope, $state, UserFactory ){
		var s 	 = this;

		UserFactory.loadLastAntro().then(function(){
			$rootScope.antro = UserFactory.antro;
		});

		return s;
	}

	function RunAntro(){
	}

})()