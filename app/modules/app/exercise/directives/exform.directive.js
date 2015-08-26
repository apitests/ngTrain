;(function(){
'use strict';

angular
	.module('NgTrain.App')

	.directive('exForm', exFormDirective)

	// @ngInject
	function exFormDirective( DBC, $rootScope, ExerciseFactory){
		return{
			restrict: 'A',
			templateUrl: 'modules/app/exercise/directives/exform.html',
			controllerAs: 'exfc',
			controller: exFormController,
			link: exFormLink,
		};

		// @ngInject
		function exFormController($scope, $stateParams, CategoryFactory){
				var s = this;
				s.key = $stateParams.exid;
				s.ex  = false;
				s.categories = [];
				s.ExerciseFactory  = ExerciseFactory;
				s.CategoryFactory = CategoryFactory;
				/* загружаем все упражнения добавленные пользователем */
				s.ExerciseFactory.loadUserExercises().then(function(){
					for(var index in ExerciseFactory.user_exercises) {
						/* потом выбираем то, которое сейчас редактирует пользователь */ 
						if ($stateParams.exid == s.ExerciseFactory.user_exercises[index].key) {
							/* отдельно сохраним идентификатор упражнения */
							s.key = index;
							s.ex  = s.ExerciseFactory.user_exercises[index];
							break;
						};
					}
				});
				s.change = exerciseChange;
				
				function exerciseChange() {
					ExerciseFactory.updateExercise(s.key);
				}
		}

		// @ngInject
		function exFormLink($scope, $element, attrs, controller){
		}
	}


})()