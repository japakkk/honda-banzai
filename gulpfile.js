var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('compilar-less',function(){
	return gulp.src(['*.less','assets/less/*.less'])
	.pipe(less().on('error',function(err){
		console.log(err);
	}))
	.pipe(concat('style.css'))
	.pipe(gulp.dest('assets/css/'))
});

gulp.task('less-to-css',function(){
	gulp.watch(['*.less','assets/less/*.less'],gulp.series('compilar-less'));
});

gulp.task('default',gulp.series('less-to-css'));

gulp.task('minify-file-css', function () {
	gulp.src('./assets/css/style.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('./assets/css/'));
});