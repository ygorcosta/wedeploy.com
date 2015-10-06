var gulp = require('gulp');
var sass = require('gulp-sass');
var soynode = require('gulp-soynode');

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

gulp.task('soy', function() {
	return gulp.src('src/soy/**/*.soy')
		.pipe(soynode({
			renderSoyWeb: true
		}))
		.pipe(gulp.dest('build'));
});

// Runner ----------------------------------------------------------------------

gulp.task('build', [
	'styles', 'vendor-styles', 'vendor-fonts',
	'scripts', 'vendor-scripts', 'images', 'soy'
]);

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['scss']);
});