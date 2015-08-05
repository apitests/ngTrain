;(function(){
	'use strict';

	angular
		.module('NgTrain.Site', [
			'ui.router',
			'ngFitText',
		])
		.run(RunSite)
		.config( ConfigSite )
		.controller('SiteCtrl', SiteController)
	
	// @ngInject
	function ConfigSite($stateProvider){
		$stateProvider.state( 'Site', {
			templateUrl: '/modules/site/tpl/site.html',	
			controller: 'SiteCtrl',
			controllerAs: 'sc', // site controller
		})
		.state('Site.Home', {
			url: '/',
			templateUrl: 'modules/site/tpl/home.html',
		})
		.state('Site.About', {
			url: '/about',
			templateUrl: 'modules/site/tpl/about.html',
		})
		.state('Site.Blog', {
			url: '/blog',
			templateUrl: 'modules/site/tpl/blog.html',
		})
		.state('Site.Contacts', {
			url: '/contacts',
			templateUrl: 'modules/site/tpl/contacts.html',
		})
	}

	// @ngInject
	function SiteController($rootScope, $state){
		// $state.transitionTo('Site.Home');
		var s = this;
		s.name = 'Site';
	}

	function RunSite(){
	}


})();