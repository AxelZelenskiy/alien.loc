var gulp 		=	require('gulp'),
	less		=	require('gulp-less'),
	livereload	=	require('gulp-livereload');

gulp.task('less',function(){
	gulp.src('build/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('public/css/'))
	.pipe(livereload());
});

gulp.task('HTML',function(){
	gulp.src('public/*.html')
	.pipe(livereload());
});

gulp.task('JS',function(){
	gulp.src('public/js/*.js')
	.pipe(livereload());
});


gulp.task('watch',function(){
	livereload.listen();
	gulp.watch('public/*.html',['HTML']);
	gulp.watch('build/less/*.less',['less']);
	gulp.watch('public/js/*.js',['JS']);
});




gulp.task('default',['watch']);