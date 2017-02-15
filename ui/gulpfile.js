'use strict';

const connect = require('gulp-connect');
const electric = require('electric');
const ghPages = require('gulp-gh-pages');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const marble = require('marble');

electric.registerTasks({
	gulp: gulp,
	plugins: ['electric-marble-components'],
	codeMirrorLanguages: ['xml', 'javascript', 'soy']
});

// CSS -------------------------------------------------------------------------

gulp.task('css', () => {
	return gulp.src('src/styles/**/*.scss')
		.pipe(sass({includePaths: ['node_modules', marble.src]}))
		.pipe(gulp.dest('dist/styles'));
});

// CSS -------------------------------------------------------------------------

gulp.task('scripts', () => {
	return gulp.src('src/scripts/**/*.js')
		.pipe(gulp.dest('dist/js'));
});

// Images ----------------------------------------------------------------------

gulp.task('images', () => {
	return gulp.src('src/images/**')
		.pipe(gulp.dest('dist/images'));
});

// Fonts -----------------------------------------------------------------------

gulp.task('fonts', () => {
	return gulp.src('node_modules/marble/build/fonts/**')
		.pipe(gulp.dest('dist/fonts'));
});

// Server ----------------------------------------------------------------------

gulp.task('server', () => {
	connect.server({
		root: 'dist',
		port: 8888
	});
});

// Watch -----------------------------------------------------------------------

gulp.task('watch', () => {
	gulp.watch('src/**/*.+(md|soy|js|fm)', ['generate']);
	gulp.watch('src/styles/**/*.scss', ['css']);
});

// Build -----------------------------------------------------------------------

gulp.task('build', (callback) => {
	runSequence('generate', ['css', 'images', 'fonts', 'scripts'], callback);
});

gulp.task('default', (callback) => {
	runSequence('build', 'server', 'watch', callback);
});
