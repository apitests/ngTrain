;(function(){

'use strict';

angular.module('NgTrain.Helpers')
.service('hlpDate', hlpDateService); // DBC - Database Connection

// @ngInject
function hlpDateService() {

	var o = {},
		d = new Date();

	o.date = new Date( d.getFullYear(), d.getMonth(), d.getDate() );
	o.unixDate = Math.round(o.date.getTime() / 1000);
	
	o.getUnixDate = function() {
		return o.unixDate;
	}

	return o;

}


})();