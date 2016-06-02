var gulp = require('gulp');
var connect = require('gulp-connect');
var layout = require('gulp-layout');
var markdown = require('gulp-markdown');
var replace = require('gulp-replace');
var ghpages = require('gulp-gh-pages');
var sass = require('gulp-sass');
var path = require('path');

// CSS -------------------------------------------------------------------------

gulp.task('styles', function() {
	return gulp.src('src/assets/styles/**/*.scss')
		.pipe(sass({includePaths: ['node_modules']}))
		.pipe(gulp.dest('dist/styles'));
});

gulp.task('vendor-styles', function() {
	return gulp.src([
			'bower_components/senna.js/build/senna.css',
			'bower_components/highlightjs/styles/tomorrow-night-eighties.css'
		])
		.pipe(gulp.dest('dist/styles/vendor'));
});

// Fonts -----------------------------------------------------------------------

gulp.task('fonts', function () {
    return gulp.src(['src/assets/fonts/**/*'])
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('vendor-fonts', function() {
	return gulp.src(['node_modules/westyle/build/fonts/**'])
		.pipe(gulp.dest('dist/fonts/vendor'));
});

// JS --------------------------------------------------------------------------

gulp.task('scripts', function() {
	return gulp.src('src/assets/scripts/**/*.js')
		.pipe(gulp.dest('dist/scripts'));
});

gulp.task('vendor-scripts', function() {
	return gulp.src([
			'bower_components/api.js/build/globals/api-min.js',
			'bower_components/handlebars/handlebars.min.js',
			'bower_components/highlightjs/highlight.pack.min.js',
			'bower_components/senna.js/build/globals/senna-min.js',
			'bower_components/soyutils/soyutils.min.js',
			'bower_components/metal-affix/build/globals/affix-min.js',
			'bower_components/metal-alert/build/globals/alert-min.js',
			'bower_components/metal-autocomplete/build/globals/autocomplete-min.js',
			'bower_components/metal-toggler/build/globals/toggler-min.js',
			'bower_components/metal-reading-progress/build/globals/readingProgress-min.js'
		])
		.pipe(gulp.dest('dist/scripts/vendor'));
});

// Images ----------------------------------------------------------------------

gulp.task('images', function() {
	return gulp.src('src/assets/images/**/*')
		.pipe(gulp.dest('dist/images'));
});

// HTML ------------------------------------------------------------------------

gulp.task('pages-home', function() {
	return gulp.src('src/content/index.html')
		.pipe(layout({
			layout: 'src/layouts/home.html',
			engine: 'nunjucks'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('pages-search', function() {
	return gulp.src('src/content/search/index.html')
		.pipe(layout({
			layout: 'src/layouts/search.html',
			engine: 'nunjucks'
		}))
		.pipe(gulp.dest('dist/docs/search'));
});

gulp.task('pages-docs', function() {
	return gulp.src('src/content/docs/index.html')
		.pipe(layout({
			layout: 'src/layouts/docs.html',
			engine: 'nunjucks'
		}))
		.pipe(gulp.dest('dist/docs'));
});

// Markdown --------------------------------------------------------------------

gulp.task('pages-faq', function() {
	return gulp.src('src/content/faq/index.md')
		.pipe(markdown())
		.pipe(replace('<!-- ', ''))
		.pipe(replace(' -->', ''))
		.pipe(layout({
			layout: 'src/layouts/faq.html',
			engine: 'nunjucks'
		}))
		.pipe(gulp.dest('dist/faq'));
});

gulp.task('pages-guide', function() {
	return gulp.src('bower_components/docs/**')
		.pipe(markdown())
		.pipe(replace('<!-- ', ''))
		.pipe(replace(' -->', ''))
		.pipe(layout(function(file) {
			var docsIndex = file.path.indexOf('/docs/') + 6;

			return {
				engine: 'nunjucks',
				layout: 'src/layouts/guide.html',
				lang: file.path.substring(docsIndex, file.path.lastIndexOf('/')),
				basepath: file.path.substring(docsIndex, file.path.length - 5)
			}
		}))
		.pipe(gulp.dest('dist/docs'));
});

// Deploy ----------------------------------------------------------------------

gulp.task('cname', function() {
	return gulp.src('src/assets/CNAME')
		.pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['cname', 'build'], function() {
	return gulp.src('dist/**/*')
		.pipe(ghpages());
});

// Runner ----------------------------------------------------------------------

gulp.task('build', [
	'styles', 'vendor-styles', 'fonts', 'vendor-fonts', 'scripts', 'vendor-scripts',
	'images', 'pages-home', 'pages-search', 'pages-docs', 'pages-faq', 'pages-guide'
]);

gulp.task('server', ['build'], function() {
	connect.server({
		root: 'dist',
		port: 8888
	});
});

gulp.task('watch', ['server'], function() {
	gulp.watch('src/assets/styles/**/*.scss', ['styles']);
});