;(function(){

'use strict';

angular.module('NgTrain.Exercise', [
	'ngCookies',
])
.factory('ExerciseFactory', ExerciseFactory);

// @ngInject
function ExerciseFactory( DBC, $cookies, $firebaseObject, $q, UserFactory, CategoryFactory ) {

	var o = {
		app_exercises: [], 	// упражнения добавленные в приложение изначально 
		user_exercises: [], // упражнения добавленные только пользователем
		u: UserFactory, 	// фабрика пользователя
	},
	ref		= DBC.getRef(),
	exRef = ref.child('exersises');

	o.loadUserExercises = function() {
		return o.u.userPromise.then(function(_data){
			return $firebaseObject(
				exRef.orderByChild("user").equalTo(_data.$id)
			).$loaded()
		})
		.then(function(_data){
			if(_data) {
				o.user_exercises = [];
				_data.forEach(function(exersise, key) {
					exersise['key'] = key;
					o.user_exercises.push(exersise);
				});
			}
		});
	}

	/* key - ключ массива или свойство key в упражнениях */
	o.updateExercise = function(key) {
		var ex_id, thisExRef, updateObject = {};
		if(o.user_exercises[key] != undefined) {
			ex_id = o.user_exercises[key].key;
			for(var index in o.user_exercises[key]) {
				if (index != 'key') {
					updateObject[index] = o.user_exercises[key][index];
				};
			}
			thisExRef = exRef.child(ex_id);
			thisExRef.set(updateObject);
		}
		/* и обновим запись в category */
		CategoryFactory.changeExCategory( ex_id, updateObject.category );
	}

	return o;

}


})();