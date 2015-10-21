'use strict';

let connect = require('gulp-connect');
let gulp = require('gulp');
let liveReload = require('gulp-livereload'); // TODO: add clientside livereload
let scss = require('gulp-sass');

gulp.task('scss', () => {
	return gulp.src('./scss/**/*.scss')
		.pipe(scss())
		.pipe(gulp.dest('./assets'))
		.pipe(liveReload());
});

gulp.task('server', () => {
	connect.server();
});

gulp.task('watch', () => {
	liveReload.listen();
	gulp.watch('./scss/**/*.scss', ['scss']);
	//gulp.watch('./index.html', []);
});

gulp.task('default', ['scss', 'server', 'watch']);
