;(function(){
'use strict';

angular
	.module('Auth')

	.directive('signInForm', signInDirective)

	// @ngInject
	function signInDirective( DBC, $rootScope, AuthFactory, $state ){
	    return{
	        restrict: 'A',
	        templateUrl: 'modules/auth/directives/auth.html',
	        link: function($scope, $element, attrs, controller){
	            $scope.userEmail = 'some.nugget@gmail.com';
				$scope.userPassword = '1111';

				$scope.signInUserByEmail = function(){
					AuthFactory
						.login({ 
							email: $scope.userEmail, 
							password: $scope.userPassword
						})
						.then(function(response){ 
		                	if (response && !response.status) {
								console.log( $($element) );
								$( $element ).find( '#wrong-data' ).show();
							};
						});

	                /*.then(function(response){
	                	alert(222);
	                	console.log(response);

	                	if (!response.status) {
	                		console.log($($element));
	                		$($element).find('#wrong-data').show();
	                	};	                	
	                }, function(response){ alert(345); });*/
	            };
	            $scope.createUserByEmail = function(){
	                AuthFactory.register({
						email: $scope.userEmail, 
						password: $scope.userPassword
	                }).then(function(response){
	                	console.log(response);
	                	if (!response.status) {
	                		console.log($($element));
	                		$($element).find('#email-in-use').show();
	                	};
					});
	            };
	            $scope.logOut = function(){
	            	AuthFactory.logout();
	            }


				$($element).find('input').bind('focus', hideAlert );
				

				function hideAlert() {
					$($element).find('.alert').hide();					
				}

	            return $scope.$on('$destroy', function() {
					$($element).find('input').unbind('focus', hideAlert);
				});
	        }
	    };
	}


})()