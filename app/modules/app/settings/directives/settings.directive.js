;(function(){
'use strict';

angular
	.module('Auth')

	.directive('settingsForm', signInDirective)

	// @ngInject
	function signInDirective( DBC, $rootScope, UserFactory){
		return{
			restrict: 'A',
			templateUrl: 'modules/app/settings/directives/settings.html',
			controllerAs: 'sdc',
			controller: function($scope){
				var ctrl = this,
					sf = {}; // settingsForm

				ctrl.dateOpened = true;
				ctrl.change = inputChange;
				ctrl.dateToggle = dateToggle;


				function dateToggle() {
					ctrl.dateOpened = !ctrl.dateOpened;
				}

				function inputChange() {
					UserFactory.update();
				}
			},

			link: function($scope, $element, attrs, controller){
				var $inputs = $element.find('input');
			}
		};
	}


})()