;(function(){
	'use strict';

	angular
		.module('NgTrain.App.User', [
			'ngRoute'
		])
		.run(function(){
			console.log('user run');
		})
		.config( ConfigUser )
		.controller( 'UserCtrl', UserController );

	// @ngInject
	function ConfigUser($routeProvider){
		$routeProvider.when('/user', {
			templateUrl: 'modules/user/user.html',
			controller: 'UserCtrl',
			controllerAs: 'uc', // user controller 
		})
	}

	// @ngInject	
	function UserController($rootScope){
		var s = this;
		$rootScope.path = 'user';
		s.user = {
			name: 'Dima',
			email: 'some.nugget@gmail.com',
		};
		console.log('UserCtrl');
	}

})();