var gulp = require('gulp');
var connect = require('gulp-connect');
var layout = require('gulp-layout');
var markdown = require('gulp-markdown');
var sass = require('gulp-sass');

// CSS -------------------------------------------------------------------------

gulp.task('styles', function() {
	return gulp.src('src/styles/*.scss')
		.pipe(sass({includePaths: ['bower_components']}))
		.pipe(gulp.dest('build/styles'));
});

gulp.task('vendor-styles', function() {
	return gulp.src([
			'bower_components/highlightjs/styles/github-gist.css'
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
			'bower_components/highlightjs/highlight.pack.min.js'
		])
		.pipe(gulp.dest('build/vendor/scripts'));
});

// Images ----------------------------------------------------------------------

gulp.task('images', function() {
	return gulp.src('src/images/*')
		.pipe(gulp.dest('build/images'));
});

// HTML ------------------------------------------------------------------------

gulp.task('pages-home', function() {
	return gulp.src('src/pages/index.html')
		.pipe(layout({
			layout: 'src/layouts/home.html',
			engine: 'nunjucks'
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('pages-faq', function() {
	return gulp.src('src/pages/faq/index.md')
		.pipe(markdown({
			breaks: true
		}))
		.pipe(layout({
			layout: 'src/layouts/faq.html',
			engine: 'nunjucks'
		}))
		.pipe(gulp.dest('build/faq'));
});

gulp.task('pages-docs', function() {
	return gulp.src('bower_components/docs/*.md')
		.pipe(markdown({
			breaks: true
		}))
		.pipe(layout({
			layout: 'src/layouts/docs.html',
			engine: 'nunjucks'
		}))
		.pipe(gulp.dest('build/docs'));
});

// Runner ----------------------------------------------------------------------

gulp.task('build', [
	'styles', 'vendor-styles', 'vendor-fonts', 'scripts', 'vendor-scripts',
	'images', 'pages-home', 'pages-faq', 'pages-docs'
]);

gulp.task('server', ['build'], function() {
	connect.server({
		root: 'build',
		port: 8888
	});
});

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['scss']);
});