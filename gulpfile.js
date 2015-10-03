var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build', function() {
	return gulp.src('web/styles/*.scss')
		.pipe(sass({includePaths: ['web/vendor']}))
		.pipe(gulp.dest('web/build/styles'));
});

gulp.task('watch', function() {
	gulp.watch('web/styles/*.scss', ['build']);
});