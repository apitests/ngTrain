;(function(){

'use strict';


angular
		.module('NgTrain.App.Calendar', [
			'ui.router',
		])

		.run(RunCalendar)
		.config( ConfigCalendar )
		.controller('CalendarCtrl', CalendarController)
	
	// @ngInject
	function ConfigCalendar($stateProvider){
		$stateProvider.state( 'App.Calendar', {
			url: '/app',
			views: {
				'sidebar' : {
					templateUrl: '/modules/app/tpl/sidebar.html',	
				}, 
				'content' : {
					templateUrl: '/modules/app/calendar/calendar.html',
				}
			},
			controller: 'CalendarCtrl',
			controllerAs: 'cc', // site controller
		})
	}

	// @ngInject
	function CalendarController($rootScope, $state){
		// $state.transitionTo('Calendar.Home');
		var s = this;
		s.name = 'Calendar';
	}

	function RunCalendar(){
	}

})()