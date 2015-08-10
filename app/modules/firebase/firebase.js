;(function(){

'use strict';

angular.module('NgTrain.Firebase', [
	'firebase'
])
.factory('DBC', DbFactory); // DBC - Database Connection

// @ngInject
function DbFactory(FIRE_URL, $firebaseAuth) {

	var o = {},
		ref = new Firebase(FIRE_URL),
		auth = $firebaseAuth(ref);

	o.getRef = function() {
		return ref;
	}	

	o.get$Auth = function() {
		return auth;
	}

	o.getAuth = function() {
		return ref.getAuth();
	}
	
	return o 

}


})();