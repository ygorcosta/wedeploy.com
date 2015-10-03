var gulp = require('gulp');
var sass = require('gulp-sass');
var soynode = require('gulp-soynode');

gulp.task('build', function() {
	return gulp.src('web/styles/*.scss')
		.pipe(sass({includePaths: ['web/vendor']}))
		.pipe(gulp.dest('web/build/styles'));
});

gulp.task('soy', function() {
	return gulp.src('soy/**/*.soy')
		.pipe(soynode({
			renderSoyWeb: true
		}))
		.pipe(gulp.dest('web'));
});

gulp.task('watch', function() {
	gulp.watch('web/styles/*.scss', ['build']);
});