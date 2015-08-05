;(function(){
	'use strict';

	angular
		.module('NgTrain.App.Users', [
			'ngRoute'
		])
		.run(function(){
			console.log('users run');
		})
		.config( ConfigUsers )
		.controller( 'UsersCtrl', UsersController );

	// @ngInject
	function ConfigUsers($routeProvider){
		$routeProvider.when('/users', {
			templateUrl: 'modules/users/users.html',
			controller: 'UsersCtrl',
			controllerAs: 'usc', // user controller 
		})
	}

	// @ngInject	
	function UsersController($rootScope){
		var s = this;
		$rootScope.path = 'users';
		s.users = [ 
			{
			    "id": "55abcc43847c3e07420596a4",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 22,
			    "balance": "3456.25",
			    "eyeColor": "blue",
			    "name": "Jennings Ross",
			    "gender": "male",
			    "email": "jenningsross@zork.com",
			    "phone": "+1 (884) 578-2841",
			    "address": "858 Bedell Lane, Edinburg, Oregon, 4485",
			    "registered": "2014-06-18T08:40:27 -03:00"
			  },
			  {
			    "id": "55abcc43a42f13dfe926a3cf",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 40,
			    "balance": "3456.25",
			    "eyeColor": "green",
			    "name": "Avis Guzman",
			    "gender": "female",
			    "email": "avisguzman@zork.com",
			    "phone": "+1 (877) 460-2280",
			    "address": "254 Gardner Avenue, Gwynn, Virgin Islands, 5689",
			    "registered": "2014-10-17T11:48:01 -03:00"
			  },
			  {
			    "id": "55abcc43cc25f5d0a70c6b7a",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 21,
			    "balance": "3456.25",
			    "eyeColor": "green",
			    "name": "Marguerite Vargas",
			    "gender": "female",
			    "email": "margueritevargas@zork.com",
			    "phone": "+1 (980) 409-3289",
			    "address": "986 Jerome Street, Maplewood, Mississippi, 2222",
			    "registered": "2014-11-07T13:33:48 -02:00"
			  },
			  {
			    "id": "55abcc43be793d383c8521f9",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 21,
			    "balance": "3456.25",
			    "eyeColor": "blue",
			    "name": "Jolene Hogan",
			    "gender": "female",
			    "email": "jolenehogan@zork.com",
			    "phone": "+1 (810) 415-3130",
			    "address": "385 Herkimer Court, Chautauqua, Puerto Rico, 1741",
			    "registered": "2014-08-13T04:25:33 -03:00"
			  },
			  {
			    "id": "55abcc439798d097cd592cc2",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 29,
			    "balance": "3456.25",
			    "eyeColor": "green",
			    "name": "Francesca Roy",
			    "gender": "female",
			    "email": "francescaroy@zork.com",
			    "phone": "+1 (938) 557-2977",
			    "address": "262 Clark Street, Sharon, Tennessee, 6854",
			    "registered": "2014-08-05T23:08:24 -03:00"
			  },
			  {
			    "id": "55abcc4366d52f3c5508c345",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 32,
			    "balance": "3456.25",
			    "eyeColor": "brown",
			    "name": "Loretta Castillo",
			    "gender": "female",
			    "email": "lorettacastillo@zork.com",
			    "phone": "+1 (841) 538-3149",
			    "address": "194 Croton Loop, Falmouth, Texas, 6840",
			    "registered": "2014-01-30T17:17:42 -02:00"
			  },
			  {
			    "id": "55abcc43c2b6d3c2fe8d4bcd",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 32,
			    "balance": "3456.25",
			    "eyeColor": "green",
			    "name": "Ellen Harris",
			    "gender": "female",
			    "email": "ellenharris@zork.com",
			    "phone": "+1 (853) 429-3868",
			    "address": "471 Fenimore Street, Wanamie, Missouri, 6451",
			    "registered": "2014-05-30T01:04:56 -03:00"
			  },
			  {
			    "id": "55abcc43ee82a9867d32b0fb",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 33,
			    "balance": "3456.25",
			    "eyeColor": "green",
			    "name": "Fitzgerald Glenn",
			    "gender": "male",
			    "email": "fitzgeraldglenn@zork.com",
			    "phone": "+1 (936) 502-3759",
			    "address": "547 Nichols Avenue, Sanborn, Iowa, 1316",
			    "registered": "2014-02-23T22:53:28 -02:00"
			  },
			  {
			    "id": "55abcc4345a66a814006a2bc",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 23,
			    "balance": "3456.25",
			    "eyeColor": "brown",
			    "name": "Alissa Compton",
			    "gender": "female",
			    "email": "alissacompton@zork.com",
			    "phone": "+1 (912) 598-3320",
			    "address": "852 Cranberry Street, Heil, North Carolina, 224",
			    "registered": "2014-08-01T01:31:18 -03:00"
			  },
			  {
			    "id": "55abcc43afa4c749fba8124f",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 26,
			    "balance": "3456.25",
			    "eyeColor": "brown",
			    "name": "Tran Page",
			    "gender": "male",
			    "email": "tranpage@zork.com",
			    "phone": "+1 (852) 597-3447",
			    "address": "542 Kenilworth Place, Limestone, Pennsylvania, 3156",
			    "registered": "2015-02-17T22:57:04 -02:00"
			  },
			  {
			    "id": "55abcc43a44f31de10936d68",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 31,
			    "balance": "3456.25",
			    "eyeColor": "brown",
			    "name": "Nellie Raymond",
			    "gender": "female",
			    "email": "nellieraymond@zork.com",
			    "phone": "+1 (801) 574-2593",
			    "address": "567 Voorhies Avenue, Elrama, Delaware, 7565",
			    "registered": "2014-11-06T20:03:11 -02:00"
			  },
			  {
			    "id": "55abcc43b6937d5bcea5e61d",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 20,
			    "balance": "3456.25",
			    "eyeColor": "blue",
			    "name": "Price Wade",
			    "gender": "male",
			    "email": "pricewade@zork.com",
			    "phone": "+1 (957) 437-3421",
			    "address": "639 Ridgecrest Terrace, Haena, Wyoming, 6276",
			    "registered": "2015-02-17T18:50:02 -02:00"
			  },
			  {
			    "id": "55abcc433ae3aa092838984d",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 30,
			    "balance": "3456.25",
			    "eyeColor": "blue",
			    "name": "Potts Cote",
			    "gender": "male",
			    "email": "pottscote@zork.com",
			    "phone": "+1 (940) 541-3366",
			    "address": "489 Stratford Road, Kula, Minnesota, 7543",
			    "registered": "2014-05-26T09:50:15 -03:00"
			  },
			  {
			    "id": "55abcc43dff8eb6b396333f2",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 28,
			    "balance": "3456.25",
			    "eyeColor": "green",
			    "name": "Terrell Parrish",
			    "gender": "male",
			    "email": "terrellparrish@zork.com",
			    "phone": "+1 (813) 545-2068",
			    "address": "736 Argyle Road, Marenisco, Louisiana, 1193",
			    "registered": "2015-03-05T16:55:11 -02:00"
			  },
			  {
			    "id": "55abcc437220a101b247ccd5",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 31,
			    "balance": "3456.25",
			    "eyeColor": "green",
			    "name": "Bartlett Snider",
			    "gender": "male",
			    "email": "bartlettsnider@zork.com",
			    "phone": "+1 (815) 585-2191",
			    "address": "959 Gotham Avenue, Tampico, Oklahoma, 466",
			    "registered": "2014-03-23T07:01:51 -02:00"
			  },
			  {
			    "id": "55abcc4321e725a2678d3b6a",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 35,
			    "balance": "3456.25",
			    "eyeColor": "green",
			    "name": "Cross Bates",
			    "gender": "male",
			    "email": "crossbates@zork.com",
			    "phone": "+1 (888) 597-2481",
			    "address": "997 Erasmus Street, Drummond, Alaska, 7748",
			    "registered": "2015-02-25T19:47:24 -02:00"
			  },
			  {
			    "id": "55abcc43f0b3bd07bfb4642d",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 26,
			    "balance": "3456.25",
			    "eyeColor": "blue",
			    "name": "Caldwell Key",
			    "gender": "male",
			    "email": "caldwellkey@zork.com",
			    "phone": "+1 (980) 477-2441",
			    "address": "421 Plymouth Street, Hailesboro, South Carolina, 1629",
			    "registered": "2015-06-06T03:38:25 -03:00"
			  },
			  {
			    "id": "55abcc4348ce2dca1f896dfa",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 22,
			    "balance": "3456.25",
			    "eyeColor": "green",
			    "name": "Rae Terry",
			    "gender": "female",
			    "email": "raeterry@zork.com",
			    "phone": "+1 (876) 517-2357",
			    "address": "725 Jay Street, Datil, Michigan, 1878",
			    "registered": "2014-11-25T05:36:40 -02:00"
			  },
			  {
			    "id": "55abcc43fd4e910bfe85d26b",
			    "picture": "http://lorempixel.com/128/128/people/",
			    "age": 38,
			    "balance": "3456.25",
			    "eyeColor": "brown",
			    "name": "Hilary Mcintyre",
			    "gender": "female",
			    "email": "hilarymcintyre@zork.com",
			    "phone": "+1 (842) 510-3821",
			    "address": "860 Keen Court, Fairview, California, 4273",
			    "registered": "2014-06-25T16:49:48 -03:00"
			  }
		];
		

		s.reg_desc = true;
		console.log('UsersCtrl');
	}

})();