;(function(){
'use strict';


angular
	.module('NgTrain.App')
	.directive('equalHeights', EqualHeightsDirective)


function EqualHeightsDirective($timeout) {
	function link($scope, $element, attrs) {
		$timeout(function() {
			var $children        = $element.children(),
				currentMaxHeight = 0,
				numImagesLoaded  = 0,
				$images          = $element.find('img'),
				imageCount       = $images.length;

			if (imageCount > 0) {
				angular.forEach($images, function(image) {
					if (image.complete) {
						numImagesLoaded++;
					}
				});
			}
			if (numImagesLoaded === imageCount) {
				angular.forEach($children, function(child) {
					var childHeight = $(child).outerHeight();
					if (childHeight > currentMaxHeight) {
						currentMaxHeight = childHeight;
					}
			
				});
				$children.css({height: currentMaxHeight + 'px'});
			}
		});
	}

  return {
    restrict: 'A',
    scope: {},
    link: link
  };
}

})();