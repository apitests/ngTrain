;(function(){
'use strict';

angular
		.module('NgTrain.App.Exercises', [
			'ui.router',
			'NgTrain.Exercise'
		])

		.run(RunExercises)
		.config( ConfigExercises )
		.controller('ExercisesCtrl', ExercisesController)
	
	// @ngInject
	function ConfigExercises($stateProvider){
		$stateProvider.state( 'App.Exercises', {
			url: '/app/myexes',
			views: {
				'sidebar' : {
					templateUrl: '/modules/app/tpl/sidebar.html',	
				}, 
				'content' : {
					templateUrl: '/modules/app/exercises/exercises.html',
				}
			},
			controller: 'ExercisesCtrl',
			controllerAs: 'ec', // exercices controller
		})
	}

	// @ngInject
	function ExercisesController($rootScope, ExerciseFactory){
		var s = this;
		s.ex = ExerciseFactory;
		s.ex.loadUserExercises();
		console.log(11111);
	}


	function RunExercises(){
	}

})()