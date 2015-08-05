;(function(){
	'use strict';

	angular
		.module('NgTrain.App.Status', [])
		.controller('StatusCtrl', StatusController );

	// @ngInject
	function StatusController($scope){
		$scope.signedIn = true;
		console.log('StatusCtrl');
	}	

})();