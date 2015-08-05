;(function(){
'use strict';

angular
	.module('Auth', [
		'firebase',
	])
	.service('AuthService', AuthService)
	.directive('signInForm', signInDirective)


	// @ngInject
	function AuthService( $rootScope, $firebase, $firebaseAuth, $q, FIRE_URL ) {
		var ref = new Firebase(FIRE_URL),
			userStorageKey = 'authUser',
			authUser = $.jStorage.get(userStorageKey) || { status: false, data:false };

		return {
			createUserByEmail: function( email, password ) {
				var deferred = $q.defer();

				console.log(email)
				if (email != undefined) {
					ref.createUser({
						email: email,
						password: password
					}, function(error){
						if (error === null) {
							deferred.resolve({
								status: true,
							});
						} else {
							deferred.resolve({
								status: false,
								error:  error,
							});
						}
					})
				} else {
					deferred.resolve({
						status: false,
					});
				}

				return deferred.promise;
			},
			signInUserByEmail: function( email, password ) {
				var deferred = $q.defer();
				
				if (email != undefined) {
					ref.authWithPassword({
						email: email,
						password: password
					}, function ( error, data ) {
						console.log(error);
						if ( error === null ) {
							authUser = {
								status: true,
								data:   data
							}
							deferred.resolve(authUser);
							$.jStorage.set( userStorageKey, authUser );
						} else {
							deferred.resolve({
								status: false,
								error: error
							});
						}
					} );
				} else {
					deferred.resolve({
						status: false,
					});					
				}

				return deferred.promise;
			},

	        getUserState:function(){
	            // console.info(Date(authUser.data.expires));
	            console.info(authUser);
	            if(authUser.data){
	                var data = ref.getAuth();
	                authUser = {
	                    status: data ? true : false,
	                    data: (data == null) ? {} : data
	                };
	                $.jStorage.set(userStorageKey, authUser);
	            }
	            return authUser.status;
	        },
	        logOut: function(){
	            $firebaseAuth(ref).$unauth();
	            $.jStorage.deleteKey(userStorageKey);
	            $rootScope.$userState = this.getUserState();
	            console.info('log out');
	        },
	        getAuthUser: function(){
	            return authUser.data;
	        }


		}
	}


	// @ngInject
	function signInDirective( $rootScope, AuthService, $state ){
	    return{
	        restrict: 'A',
	        templateUrl: 'modules/auth/auth.html',
	        link: function($scope, $element, attrs, controller){
	            $scope.userEmail = 'amigoodesa@mail.ru';
	            // $scope.userPassword = '1111';
	            // $scope.userState = AuthService.getUserState();
				// $scope.userEmail = '';
				$scope.userPassword = '';
	            $scope.signInUserByEmail = function(){
	                AuthService.signInUserByEmail($scope.userEmail, $scope.userPassword)
	                .then(function(response){
	                	console.log(response);
	                    $scope.userState = AuthService.getUserState();
						if($scope.userState) {
	                        $state.transitionTo('Site.About');
						}
						else {
							console.log($element);
							$($element).find('.alert').show();
						}
	                });
	            };
	            $scope.createUserByEmail = function(){
	                AuthService.createUserByEmail($scope.userEmail, $scope.userPassword)
	                .then(function(response){
	                	console.log(response);
	                })
	                .then(function(response){
	                	AuthService.signInUserByEmail( $scope.userEmail, $scope.userPassword )
	                		.then(function(response){
	                			$scope.userState = AuthService.getUserState();
			                    console.log($scope.userState);
			                    if($scope.userState) {
			                        $state.transitionTo('Site.Blog');
			                    } else {
									$($element).find('.alert').show();
			                    }
	                		});
	                });
	            };
	            $scope.logOut = function(){
	            	AuthService.logOut();
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