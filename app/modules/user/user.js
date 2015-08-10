;(function(){

'use strict';

angular.module('NgTrain.User', [
])
.factory('UserFactory', UserFactory);

// @ngInject
function UserFactory() {

	var o = {},
		user = false;

	o.user = {ss:'dd'};

	o.getUser = function(){
		return o.user;
	}
	
	return o;

}


})();