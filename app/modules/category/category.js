;(function(){

'use strict';

angular.module('NgTrain.Category', [
	'ngCookies',
])
.factory('CategoryFactory', CategoryFactory);

// @ngInject
function CategoryFactory( DBC, $cookies, $firebaseObject, $q, UserFactory ) {

	var o = {
		catPromise: false,
		categories: [],
		formCategories: [],
	},
	ref		= DBC.getRef(),
	catRef = ref.child('categories');

	o.loadCategories = function() {
		o.catPromise =  $firebaseObject(catRef).$loaded().then(function(_data){
			o.categories = _data;
			return _data;
		});
		return o.catPromise;
	}
	o.loadFormCategories = function() {
		return o.catPromise.then(function(_data){
			var formCategories = {};
			_data.forEach(function(value, index){
				formCategories[index] = {
					'index'		:index,
					'header'	:index,
					'selected'	:false,
				};
			});
			o.formCategories = formCategories;
			return _data;
		});
		return o.catPromise;
	}

	o.changeExCategory = function( exercise, category ) {
		var loadedCategory;
		loadedCategory = $firebaseObject(
			catRef.orderByChild( exercise ).equalTo(true) 
		)
		.$loaded()
		.then(function( _data ){
			/* устанавливаем для данного упражения false для всех категорий */
			_data.forEach(function(value, index){
				if (value[exercise] != undefined ) {
					catRef.child(index).child(exercise).set(false);
				};
			})
		})
		.then(function( _data ){
			/* устанавливаем для данного упражения true в нужной категории */
			catRef.child(category).child(exercise).set(true);
		});
		// console.log( loadedCategory );
	}

	o.loadCategories();
	o.loadFormCategories();

	return o;

}


})();