;(function(){
'use strict';

angular
	.module('Auth', [
		'firebase',
		'ngCookies',
		'NgTrain.User'
	])
	.factory('AuthFactory', AuthFactory)

	// @ngInject
	function AuthFactory( DBC, $state, $q, $cookies, $firebaseObject, UserFactory ) {

		var o = {},
			ref = DBC.getRef(),
			usersRef = ref.child('users'),
			$auth = DBC.get$Auth();



		function authClbkDefault(_data) {
			var deferred = $q.defer(),
				d = new Date();
			
			d.setTime(d.getTime() + 1000*60*60*24*31);

			if (_data) {
				console.log('Вы успешно зашли на сайт');
				$cookies.put(
					'authToken', 
					_data.token,
					{ expires: d }
				)
				var user = new $firebaseObject(usersRef.child(_data.uid));
				return user.$loaded();

			} else {
				console.warn('Авторизация не удалась');
				deferred.resolve({
					status: false
				});
			}
		}

		function authErrorClbkDefault(_data) {
			var deferred = $q.defer();
			console.warn(_data);
			deferred.resolve({
				status: false
			});
			return deferred.promise;
		}

		function authClbkDefault2(_data) {
			var deferred = $q.defer();
			console.log(_data);

			if ((typeof _data.status) != undefined) {
				console.info('login clbk 2');
				UserFactory.user = _data;
				$state.transitionTo('App.Calendar');

			} else {

				deferred.resolve({
					status: false,
					data: _data
				});

			}
		}
		function authErrorClbkDefault2(_data) {

		}


		/* 
		obj _user = { username: 'string', password: 'string'}
		function _authClbk
		*/
		o.login = function(_user, _authClbk) {
			
			return $auth
				.$authWithPassword({
					email: _user.email,
					password: _user.password
				})
				.then(authClbkDefault, authErrorClbkDefault)
				.then(authClbkDefault2, authErrorClbkDefault2);

		} /* o.login */

		o.logout = function() {
			console.log('Log out');
			$cookies.remove( 'authToken' );
			ref.unauth();
		} /* o.logout */

		o.authByCookieToken = function() {
			var t = $cookies.get( 'authToken' ),
				userData = {};

			return $auth
					.$authWithCustomToken(t)
					.then(function(authData) { 
						if (authData) {
							var user = new $firebaseObject(usersRef.child(authData.uid));
							return user.$loaded();
						}
					});
		}


		/* 
		obj _user = { username: 'string', password: 'string'}
		function _registerClbk
		*/
		o.register = function(_user, _registerClbk) {
			var deferred = $q.defer(),
				d = new Date();		
			d.setTime(d.getTime() + 1000*60*60*24*31);;
			
			$auth
				.$createUser({
					email: _user.email, 
					password: _user.password 
				})
				.then(function(userData){
					console.log("Пользователь " + userData.uid + " создан.");
					var userRef = usersRef.child(userData.uid);
					userRef.set({
						birth: 0,
						email: _user.email,
						name: '',
						reg_date: Firebase.ServerValue.TIMESTAMP, 
						gender: 1,
					});

					return $auth.$authWithPassword({
						email: _user.email, 
						password: _user.password 
					})
				})
				.then(function(response){
					console.log(response);
					$cookies.put(
						'authToken', 
						response.token,
						{ expires: d }
					);
					$state.transitionTo('App.Calendar');
				}, function(response){
					console.warn(response);
					deferred.resolve({
						status: false,
						email: _user.email, 
						password: _user.password 
					});
				});

				return deferred.promise;
		} /* o.register */ 

		o.setByCookieToken = function() {
			var userData = o.authByCookieToken()
					.then(function(_data){
						console.log(_data);
						if(_data){
							UserFactory.user = _data;
						}					
					});
			return userData;
		}




		return o;
	}


})()