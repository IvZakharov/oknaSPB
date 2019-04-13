const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber'); 
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const imagemin = require('gulp-tinypng');
  
sass.compiler = require('node-sass');

const cssFiles = [
	'./src/css/main.css',
  './src/css/button.css',
	'./src/css/header.css',
	'./src/css/main-nav.css',
  './src/css/services.css',
  './src/css/product.css',
  './src/css/page-form.css',
  './src/css/advantages.css',
  './src/css/about-us.css',
  './src/css/reviews.css',
  './src/css/location.css',
  './src/css/modal.css',
  './src/css/mobile-menu.css',
	'./src/css/footer.css'
]
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
  	.pipe(plumber())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
 });

gulp.task('style', function () {    
  return gulp.src(cssFiles)
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({
    	level: 2
    }))
	.pipe(gulp.dest('./build/css'))
	.pipe(browserSync.stream());
});
 
gulp.task('img', function () {
    gulp.src('./src/img/**/*.{jpg,png}')
        .pipe(tingpng('API_KEY'))
        .pipe(gulp.dest('./build/img'));
});

gulp.task('watch', function () {
	browserSync.init({
        server: "./"
    });

	gulp.watch("./src/css/**/*.css", gulp.series('style'));
  	gulp.watch("./src/sass/**/*.scss", gulp.series('sass'));
    gulp.watch("./*.html").on('change', browserSync.reload);
});

