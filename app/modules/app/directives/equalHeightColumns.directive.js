;(function(){
'use strict';


angular
	.module('NgTrain.App')
	.directive('equalHeights', EqualHeightsDirective)


function EqualHeightsDirective($timeout, APP_SM_WIDTH) {
	function link($scope, $element, attrs) {
		var setHeight = function() {
			var $children        = $element.children(),
				currentMaxHeight = 0,
				numImagesLoaded  = 0,
				$images 		 = $element.find('img'),
				imageCount		 = $images.length;

			if($(window).innerWidth() > APP_SM_WIDTH) {

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
					$children.css({'min-height': currentMaxHeight + 'px'});
				}
			} else {
				$children.css({'min-height': 'initial'});
			}

		};

		setHeight();
		$(window).on('resize', setHeight);

	}

  return {
    restrict: 'A',
    scope: {},
    link: link
  };
}

})();