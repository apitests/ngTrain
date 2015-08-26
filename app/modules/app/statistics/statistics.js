;(function(){

'use strict';


angular
		.module('NgTrain.App.Statistics', [
			'ui.router',
		])

		.run(RunStatistics)
		.config( ConfigStatistics )
		.controller('StatisticsCtrl', StatisticsController)
	
	// @ngInject
	function ConfigStatistics($stateProvider){
		$stateProvider.state( 'App.Statistics', {
			url: '/app/stat',
			views: {
				'sidebar' : {
					templateUrl: '/modules/app/tpl/sidebar.html',	
				}, 
				'content' : {
					templateUrl: '/modules/app/statistics/statistics.html',
				}
			},
			controller: 'StatisticsCtrl',
			controllerAs: 'sc', // site controller
		})
	}

	// @ngInject
	function StatisticsController($rootScope, $state){
		var s = this;
		s.name = 'Statistics';
	}

	function RunStatistics(){
	}

})()