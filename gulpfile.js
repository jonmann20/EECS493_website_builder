'use strict';

let connect = require('gulp-connect-php');
let gulp = require('gulp');
let liveReload = require('gulp-livereload'); // TODO: add clientside livereload
let scss = require('gulp-sass');
let handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

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

gulp.task('templates', function () {
    gulp.src('templates/*.html')
          .pipe(handlebars({
      // Pass your local handlebars version
      handlebars: require('handlebars')
    }))
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
          namespace: 'templates',
          noRedeclare: true, // Avoid duplicate declarations
      }))
      .pipe(concat('templates.js'))
      .pipe(gulp.dest('compiled'));
});


gulp.task('default', ['scss', 'templates', 'server', 'watch']);