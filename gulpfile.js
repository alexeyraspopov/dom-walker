'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	complexity = require('gulp-complexity'),
	karma = require('gulp-karma'),
	wrap = require('gulp-wrap-exports'),
	rename = require('gulp-rename');

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

gulp.task('wrap', function(){
	return gulp.src('index.js')
		.pipe(wrap({ name: 'walk' }))
		.pipe(rename('walker.js'))
		.pipe(gulp.dest('.'));
});

gulp.task('default', ['analysis', 'test']);
