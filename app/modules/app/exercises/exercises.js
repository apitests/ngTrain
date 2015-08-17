;(function(){

'use strict';


angular
		.module('NgTrain.App.Exercises', [
			'ui.router',
		])

		.run(RunExercises)
		.config( ConfigExercises )
		.controller('ExercisesCtrl', ExercisesController)
	
	// @ngInject
	function ConfigExercises($stateProvider){
		$stateProvider.state( 'App.Exercises', {
			url: '/app/ex',
			views: {
				'sidebar' : {
					templateUrl: '/modules/app/tpl/sidebar.html',	
				}, 
				'content' : {
					templateUrl: '/modules/app/exercises/exercises.html',
				}
			},
			controller: 'ExercisesCtrl',
			controllerAs: 'ec', // site controller
		})
	}

	// @ngInject
	function ExercisesController($rootScope, $state){
		// $state.transitionTo('Exercises.Home');
		var s = this;
		s.name = 'Exercises';
	}

	function RunExercises(){
	}

})()