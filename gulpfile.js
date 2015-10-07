var gulp = require('gulp');
var sass = require('gulp-sass');
var soynode = require('gulp-soynode');
var markdown = require('gulp-markdown');
var layout = require('gulp-layout');

// CSS -------------------------------------------------------------------------

gulp.task('styles', function() {
	return gulp.src('src/styles/*.scss')
		.pipe(sass({includePaths: ['bower_components']}))
		.pipe(gulp.dest('build/styles'));
});

gulp.task('vendor-styles', function() {
	return gulp.src([
			'bower_components/codemirror/lib/codemirror.css',
			'bower_components/codemirror/theme/mdn-like.css'
		])
		.pipe(gulp.dest('build/vendor/styles'));
});

// Fonts -----------------------------------------------------------------------

gulp.task('vendor-fonts', function() {
	return gulp.src([
			'bower_components/steel-bootstrap/build/fonts/**'
		])
		.pipe(gulp.dest('build/vendor/fonts'));
});

// JS --------------------------------------------------------------------------

gulp.task('scripts', function() {
	return gulp.src('src/scripts/*.js')
		.pipe(gulp.dest('build/scripts'));
});

gulp.task('vendor-scripts', function() {
	return gulp.src([
			'bower_components/soyutils/soyutils.min.js',
			'bower_components/steel-alert/build/globals/alert-min.js',
			'bower_components/codemirror/lib/codemirror.js',
			'bower_components/codemirror/mode/javascript/javascript.js'
		])
		.pipe(gulp.dest('build/vendor/scripts'));
});

// Images ----------------------------------------------------------------------

gulp.task('images', function() {
	return gulp.src('src/images/*')
		.pipe(gulp.dest('build/images'));
});

// HTML ------------------------------------------------------------------------

gulp.task('index', function() {
	return gulp.src(['src/index.html'])
		.pipe(layout({
			layout: 'src/layouts/index.html',
			engine: 'nunjucks'
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('learn', function() {
	return gulp.src('bower_components/learn/*.md')
		.pipe(markdown())
		.pipe(layout({
			layout: 'src/layouts/learn.html',
			engine: 'nunjucks'
		}))
		.pipe(gulp.dest('build/learn'));
});

// Runner ----------------------------------------------------------------------

gulp.task('build', [
	'styles', 'vendor-styles', 'vendor-fonts',
	'scripts', 'vendor-scripts', 'images', 'index', 'learn'
]);

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['scss']);
});