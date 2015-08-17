;(function(){

'use strict';

angular.module('NgTrain.User', [
	'ngCookies',
	'NgTrain.Helpers',
])
.factory('UserFactory', UserFactory);

// @ngInject
function UserFactory( DBC, $cookies, $firebaseObject, AuthFactory, hlpDate, $q ) {

	var o = {
			user: {},
			antro: {},
			userPromise: {},
			antroPromise: {},
		},
		antroKeys = [
			'weight', 'waist', 'chest', 'shoulders', 
			'biceps', 'forearm', 'neck', 'hip', 
			'buttocks', 'calves' 
		],
		$auth	= DBC.get$Auth(),
		ref		= DBC.getRef(),
		usersRef = ref.child('users'),
		antroRef = ref.child('anthropometry');


	o.getUser = function(){
		return o.user;
	}

	o.update = function( ) {
		console.log(o.user);
		var userRef = usersRef.child(o.user.$id);
		userRef.set({
			birth: 	o.user.birth || '',
			email: 	o.user.email || '',
			name: 	o.user.name || '', 
			gender: o.user.gender || '',
		});
	}

	o.setUserByCookieToken = function() {
		o.userPromise = AuthFactory.authByCookieToken();
		o.userPromise.then(function(_data){
			if(_data) {
				o.user = _data;
			}					
		});

		return o.userPromise;
	}

	o.loadLastAntro = function() {

		o.antroPromise = o.userPromise.then(function(_data) {
			var userAntroRef = antroRef.child(o.user.$id);
			return $firebaseObject(userAntroRef.limitToLast(1)).$loaded();
		});
		o.antroPromise.then(function(_data){
			if(_data) {
				_data.forEach(function(childSnapshot) {
					o.antro = childSnapshot;
					return true;
				});
			}
		})
		return o.antroPromise;
	}

	o.updateAntro = function() {
		var userAntroRef = antroRef.child(o.user.$id),
			unixDate = hlpDate.getUnixDate();
			
		if (o.antro != undefined) {	
			userAntroRef
				.child('' + unixDate + '')
				.set(o.antro);
		};
	}

	return o;

}


})();