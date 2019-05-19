var gulp 		=	require('gulp'),
	less		=	require('gulp-less'),
	notify		= 	require('gulp-notify'),
	plumber     = 	require("gulp-plumber"),
	autoprefixer = require("gulp-autoprefixer"),
	browserSync = 	require('browser-sync');

gulp.task('less',function(){
	gulp.src('build/less/*.less')
		.on("error", notify.onError("Error: <%= error.message %>"))
		.pipe(less())
		.pipe(autoprefixer(
				{ browsers: ['last 25 versions'] }
			))
		.pipe(gulp.dest('public/css/'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('HTML',function(){
	gulp.src('public/*.html')
	.pipe(browserSync.reload({stream:true}));
});

gulp.task('SingleCSSFile',function(){
	gulp.src('public/css/explorer.css')
	.pipe(browserSync.reload({stream:true}));
});

gulp.task("CSS",function(){
	gulp.src('public/css/*.css')
	.pipe(browserSync.reload({stream:true}));
});

gulp.task('JS',function(){
	gulp.src('public/js/*.js')
	.pipe(browserSync.reload({stream:true}));
});

gulp.task("browser-sync",function () {
    browserSync.init({
        proxy:"alien.loc"
    });
});

gulp.task('watch',["HTML",'less','JS','browser-sync'],function(){
	// livereload.listen(35729);
	gulp.watch('public/*.html',['HTML']);
	gulp.watch('build/less/*.less',['less']);
	gulp.watch('public/js/*.js',['JS']);
	gulp.watch('public/css/explorer.css',['SingleCSSFile']);
	gulp.watch("public/*.html",browserSync.reload);
});

gulp.task('secondary',["HTML","less","JS","browser-sync"],function(){
	gulp.watch('public/*.html',['HTML']);
	gulp.watch('build/less/*.less',['less']);
	gulp.watch('public/js/*.js',['JS']);
	gulp.watch('public/css/*.*',['CSS']);
	gulp.watch("public/*.html",browserSync.reload);
});


gulp.task('default',['watch']);