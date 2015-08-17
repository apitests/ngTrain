;(function(){
'use strict';

angular
	.module('Auth')

	.directive('antroForm', signInDirective)

	// @ngInject
	function signInDirective( DBC, $rootScope, UserFactory){
		return {
			restrict: 'A',
			templateUrl: 'modules/app/antro/directives/antro.html',
			controllerAs: 'adc',
			controller: function($scope){
				var ctrl = this,
					af = {}; // antroForm

				ctrl.dateOpened = true;
				ctrl.change = inputChange;
				ctrl.dateToggle = dateToggle;


				function dateToggle() {
					ctrl.dateOpened = !ctrl.dateOpened;
				}

				function inputChange() {
					af = $scope['antroForm'];
					console.log(UserFactory.antro);
					UserFactory.updateAntro();
				}
			},

			link: function($scope, $element, attrs, controller) {

			}
		};
	}


})()