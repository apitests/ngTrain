;(function(){
	'use strict';

	angular
		.module('NgTrain.App.Status')
		.run(RunStatus)
		.config(ConfigStatus);

	function RunStatus(){
		console.log('RunStatus');
	}

	function ConfigStatus(){
		console.log('RunStatus');
	}

})();