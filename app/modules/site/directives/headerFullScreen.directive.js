;(function(){
	'use strict';

	angular
		.module('NgTrain.Site')
		.directive('headerFullScreen', headerFullScreen);


	function headerFullScreen() {
		return {
			controller: function($element){
				this.setFullScreenBlock = function() {
					$($element).height($(window).height());					
				}
			},
			link: function($scope, $element, $attributes, controller) {
				controller.setFullScreenBlock();
				$(window).bind('resize', controller.setFullScreenBlock);
				return $scope.$on('$destroy', function() {
					$(window).unbind('resize', controller.setFullScreenBlock);
				});
			}
		}
	}


})();		