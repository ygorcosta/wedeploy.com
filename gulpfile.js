var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build', function() {
	return gulp.src('styles/*.scss')
		.pipe(sass({includePaths: ['bower_components']}))
		.pipe(gulp.dest('build/styles'));
});

gulp.task('watch', function() {
	gulp.watch('styles/*.scss', ['build']);
});