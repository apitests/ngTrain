;(function(){
'use strict';

angular
		.module('NgTrain.App.Exercise', [
			'ui.router',
			'NgTrain.Exercise'
		])

		.run(RunExercises)
		.config( ConfigExercises )
		.controller('ExerciseCtrl', ExerciseController)
	
	// @ngInject
	function ConfigExercises($stateProvider){
		$stateProvider.state( 'App.Exercise', {
			url: '/app/myexes/:exid',
			views: {
				'sidebar' : {
					templateUrl: '/modules/app/tpl/sidebar.html',	
				}, 
				'content' : {
					templateUrl: '/modules/app/exercise/exercise.html',
					controller: 'ExerciseCtrl',
					controllerAs: 'exc', // exercice controller
				}
			},
		})
	}

	// @ngInject
	function ExerciseController($rootScope, ExerciseFactory, $stateParams){
	}

	function RunExercises(){
	}

})()