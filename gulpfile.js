var { src, dest, parallel, watch } 	=	require('gulp'),
	less							=	require('gulp-less'),
	notify							= 	require('gulp-notify'),
	plumber     					= 	require("gulp-plumber"),
	autoprefixer 					= require("gulp-autoprefixer"),
	browserSync 					= 	require('browser-sync').create();


function BrowSync(){
	return browserSync.init({
		proxy: "alien.loc"
	});
}

function style(){
	return src("build/less/*.less")
			.on("error", notify.onError("Error: <%= error.message %>"))
			.pipe(less())
			.pipe(autoprefixer({
				overrideBrowserslist: ["last 10 versions"]
			}))
			.pipe(dest('public/css/'))
			.pipe(browserSync.stream());
}

function start_watching(){
	watch('build/less/*.less',style);
	watch(['public/*.html','public/**/*.html']).on("change",browserSync.reload);
	watch('public/js/**/*.js').on("change",browserSync.reload);
}

function browserSyncAdminPanel(done){
	browserSync.init({
		proxy: "alien.loc/admin-panel/"
	});
	done();
}

function stylesAdminPanel(){
	return src('build/less/admin-panel.less')
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(less())
	.pipe(autoprefixer({
		overrideBrowserslist: ["last 10 versions"]
	}))
	.pipe(dest('public/admin-panel/assets/css/'))
	.pipe(browserSync.stream());
}

function scriptsAdminPanel(){
	return src('build/js/admin-panel.js')
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(dest('public/admin-panel/assets/js/'))
	.pipe(browserSync.stream());
}

function watchAdminPanel(){
	watch('public/admin-panel/index.html').on("change", browserSync.reload);
	watch('build/less/admin-panel.less',stylesAdminPanel);
	watch('build/js/*.js',scriptsAdminPanel);
}

exports.BrowSync = BrowSync;
exports.styles = style;

exports.admin = parallel(browserSyncAdminPanel, stylesAdminPanel, scriptsAdminPanel, watchAdminPanel);

exports.default = parallel(BrowSync,style,start_watching);
// gulp.task('less',function(){
// 	gulp.src('build/less/*.less')
// 		.on("error", notify.onError("Error: <%= error.message %>"))
// 		.pipe(less())
// 		.pipe(autoprefixer(
// 				// { browsers: ['last 25 versions'] }
// 			))
// 		.pipe(gulp.dest('public/css/'))
// 		.pipe(browserSync.reload({stream:true}));
// });

// gulp.task('HTML',function(){
// 	gulp.src('public/*.html')
// 	.pipe(browserSync.reload({stream:true}));
// });


// gulp.task('SingleCSSFile',function(){
// 	gulp.src('public/css/explorer.css')
// 	.pipe(browserSync.reload({stream:true}));
// });

// gulp.task("CSS",function(){
// 	gulp.src('public/css/*.css')
// 	.pipe(browserSync.reload({stream:true}));
// });

// gulp.task('JS',function(){
// 	gulp.src('public/js/*.js')
// 	.pipe(browserSync.reload({stream:true}));
// });

// gulp.task("browser-sync",function () {
//     browserSync.init({
//         proxy:"alien.loc"
//     });
// });

// gulp.task('watch',function(){
// 	// livereload.listen(35729);
// 	gulp.watch('public/*.html',gulp.parallel('HTML'));
// 	gulp.watch('build/less/*.less',gulp.parallel('less'));
// 	gulp.watch('public/js/*.js',gulp.parallel('JS'));
// 	gulp.watch('public/css/explorer.css',gulp.parallel('SingleCSSFile'));
// 	gulp.watch("public/*.html",browserSync.reload({stream:true}));
// });

// gulp.task('secondary',["HTML","less","JS","browser-sync"],function(){
// 	gulp.watch('public/*.html',['HTML']);
// 	gulp.watch('build/less/*.less',['less']);
// 	gulp.watch('public/js/*.js',['JS']);
// 	gulp.watch('public/css/*.*',['CSS']);
// 	gulp.watch("public/*.html",browserSync.reload);
// });


// gulp.task('default',gulp.parallel('watch','browser-sync','HTML','less','JS','SingleCSSFile'));