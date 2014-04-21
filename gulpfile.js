'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	complexity = require('gulp-complexity'),
	karma = require('gulp-karma');

gulp.task('analysis', function(){
	return gulp.src('*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(complexity());
});

gulp.task('test', function(){
	return gulp.src('spec.js')
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}));
});

gulp.task('default', ['analysis', 'test']);
