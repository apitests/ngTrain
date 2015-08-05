'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	scss = require('gulp-sass'),
	webserver = require('gulp-webserver'),
	minifyCss = require('gulp-minify-css'),
	ngAnnotate = require('gulp-ng-annotate'),
	uglify = require('gulp-uglify');




gulp.task('pjs', function(){
	gulp.src([
		'bower/angular/angular.js',
		'bower/angular-ui-router/release/angular-ui-router.js',
		'bower/firebase/firebase.js',
		'bower/jquery/dist/jquery.min.js',
		'bower/bootstrap/dist/js/bootstrap.js',
		'bower/ngFitText/src/ng-FitText.js',
		'bower/angular-scrollto/angular-scrollto.js',
		'bower/jStorage/jstorage.js',
		'bower/angularfire/dist/angularfire.js',
	])
	.pipe(concat('libs.js'))
	.pipe(gulp.dest('app/assets/js'))

	gulp.src([
		'app/js/**/*.js',
		'app/modules/**/*.js'
	])
	.pipe(concat('app.js'))
	.pipe(uglify())
	.pipe(ngAnnotate())
	.pipe(gulp.dest('app/assets/js'));

});

gulp.task('pcss', function() {
	gulp.src('app/scss/**/*.scss')
		.pipe(scss())
		.pipe(concat('app.css'))
		.pipe(gulp.dest('app/assets/css'));

	gulp.src('bower/bootstrap/dist/css/bootstrap.css')
		.pipe(concat('libs.css'))
		.pipe(gulp.dest('app/assets/css')); 
});




gulp.task('js', function(){
	gulp.src([
		'bower/angular/angular.js',
		'bower/angular-ui-router/release/angular-ui-router.js',
		'bower/angular-bootstrap/ui-bootstrap.js',
		'bower/angular-bootstrap/ui-bootstrap-tpls.js',
		'bower/firebase/firebase.js',		
		'bower/angularfire/dist/angularfire.js',
		'bower/jquery/dist/jquery.js',
		'bower/bootstrap/dist/js/bootstrap.js',
		'bower/ngFitText/src/ng-FitText.js',
		'bower/angular-scrollto/angular-scrollto.js',
		'bower/jStorage/jstorage.js',
	])
	.pipe(concat('libs.js'))
	.pipe(gulp.dest('app/assets/js'))

	gulp.src([
		'app/js/**/*.js',
		'app/modules/**/*.js'
	])
	.pipe(concat('app.js'))
	.pipe(ngAnnotate())
	.pipe(gulp.dest('app/assets/js'));
	
});

gulp.task('css', function() {
	gulp.src('app/scss/**/*.scss')
		.pipe(scss())
		.pipe(concat('app.css'))
		.pipe(gulp.dest('app/assets/css'));

	gulp.src('bower/bootstrap/dist/css/bootstrap.css')
		.pipe(concat('libs.css'))
		.pipe(gulp.dest('app/assets/css')); 

});


gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['js']);
	gulp.watch('app/modules/**/*.js', ['js']);
	gulp.watch('app/scss/**/*.scss', ['css']);
	// gulp.watch('app/**/*.html', ['html']);
});

gulp.task('pwatch', function(){
	gulp.watch('app/js/**/*.js', ['pjs']);
	gulp.watch('app/modules/**/*.js', ['pjs']);
	gulp.watch('app/scss/*.scss', ['pcss']);
	// gulp.watch('app/**/*.html', ['phtml']);
});


gulp.task('webserver', function(){
	gulp.src('app/')
		.pipe(webserver({
			livereload: true,
			open: true
		}));
});

gulp.task('prod', [
	'pjs', 'pcss', 'pwatch'
]);

gulp.task('dev', [
	'js', 'css', 'watch'
]);

gulp.task('default', [
	'dev', // разработка
	// 'prod', // работа
	'webserver',
]);
