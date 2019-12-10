const { src, dest, series, parallel, watch } = require('gulp'),

		sass          = require('gulp-sass'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		cleanCSS      = require('gulp-clean-css'),
		sourceMaps    = require('gulp-sourcemaps'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		notify        = require('gulp-notify');

function styles () {
	return src('app/sass/**/*.sass')
	.pipe(sourceMaps.init())
	.pipe(sass().on('error', notify.onError()))
	.pipe(rename({ suffix: '.min'}))
	.pipe(autoprefixer(['last 2 versions']))
	.pipe(cleanCSS())
	.pipe(sourceMaps.write())
	.pipe(dest('app/css'))
	.pipe(browserSync.stream());
}

function serve () {
	browserSync.init({
		server: {
			baseDir: "app"
		}
	}); 
	watch('app/*.html').on('change', browserSync.reload);
	watch('app/js/*.js').on('change', browserSync.reload);
	watch('app/sass/**/*.sass', styles);
}

exports.default = series(styles, serve);


		