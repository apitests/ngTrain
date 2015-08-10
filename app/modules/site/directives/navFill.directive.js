;(function(){
	'use strict';

	angular
		.module('NgTrain.Site')
		.directive('navFill', navFill)

	function navFill() {
		return {
			controller: function($element, $scope, $state){
				this.colorHandle = function() {
					if ($state.current.name != 'Site.Home') {
						$($element).addClass('fillColor');
					} else {
						if( $(window).scrollTop() > $($element).outerHeight() ) {
							$($element).addClass('fillColor');
						} else {
							$($element).removeClass('fillColor');
						}
						
					}
				}
			},
			link: function($scope, $element, $attributes, controller) {
				controller.colorHandle();
				$(window).bind('scroll', controller.colorHandle);
				return $scope.$on('$destroy', function() {
					$(window).unbind('scroll', controller.colorHandle);
				});
			}
		}
	}
})()