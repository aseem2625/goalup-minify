var chalk = require('chalk');
var path = require('path');
var gulp = require('gulp');

var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

var inlinesource = require('gulp-inline-source');

var opts = require('./options');

var config = {};
var workingDir = process.cwd();


function handleError(err) {
    console.log(chalk.bold.red(JSON.stringify(err)));
    this.emit('end');
}

function logger(msg) {
	return function() {
		console.log(chalk.bold.green(JSON.stringify(msg)));
	}
}

/*
 * 1. Scripts
*/
function script () {
	return gulp.src([path.join(workingDir, config.script, '/**/**.js'), config.excludePath], { sourcemaps: true })
		.pipe(babel({
			presets: ['@babel/env'],
			plugins: [
			["@babel/plugin-proposal-decorators", { "legacy": true }], 
			["@babel/plugin-proposal-class-properties", { "loose" : true }],
			'@babel/transform-runtime'
			]
		}).on('error', handleError))
		.pipe(uglify(opts.uglifyOpts).on('error', handleError))
	    .pipe(gulp.dest(path.join(workingDir, config.basePath, config.script)))
	    .on('end', logger('...JS compressed'))
	    .on('error', handleError);
}

/*
 * 2. Styles
*/

function stylusTask() {
	return gulp.src([path.join(workingDir, config.style, '/**/**.styl'), config.excludePath])
	  	.pipe(stylus().on('error', handleError));
}

function sassTask() {
	return gulp.src([path.join(workingDir, config.style, '/**/**.+(css|scss)'), config.excludePath])
		.pipe(sass().on('error', sass.logError));
}


function _commonCssStream(stream) {
	return stream().pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: true
	}).on('error', handleError))
	.pipe(cleanCSS().on('error', handleError))
	.pipe(gulp.dest(path.join(workingDir, config.basePath, config.style)))
	.on('end', logger('...CSS/SCSS compressed'))
	.on('error', handleError);

}

var style = gulp.parallel(_commonCssStream.bind(null, stylusTask), _commonCssStream.bind(null, sassTask));


/*
 * 3. Htmls
*/
function html() {
	return gulp.src([path.join(workingDir, config.html, '/**/**.html'), config.excludePath])
		.pipe(htmlmin(opts.htmlminOpts).on('error', handleError))
		.pipe(gulp.dest(path.join(workingDir, config.basePath, config.html)))
		.on('end', logger('...HTML compressed'))
		.on('error', handleError);
}

/*
 * 4. Images
*/
function image() {
	return gulp.src([path.join(workingDir, config.image, '/**/**.+(png|jpg|gif|svg)'), config.excludePath])
	    .pipe(imagemin({
	    	interlaced: true,    // Setting interlaced to true
	        optimizationLevel: 3,
            progressive: true
        }).on('error', handleError))
	   .pipe(gulp.dest(path.join(workingDir, config.basePath, config.image)))
	   .on('end', logger('...IMAGES compressed'))
	   .on('error', handleError);
}


function inlineAssets() {
    return gulp.src(path.join(workingDir, config.basePath, config.html, '/**/**.html'))
        .pipe(inlinesource({
    	    compress: false
		}).on('error', handleError))
    	.pipe(gulp.dest(path.join(workingDir, config.basePath, config.html)))
		.on('end', logger('...INLINED assets in HTML'))
		.on('error', handleError);

}

function registerBasePaths(basePaths) {
	config.basePath = basePaths.base;

	basePaths.script && (config.script = basePaths.script);
	basePaths.style && (config.style = basePaths.style);
	basePaths.html && (config.html = basePaths.html);
	basePaths.image && (config.image = basePaths.image);

	config.excludePath = path.join('!', workingDir, config.basePath, '{,/**}'); // Exludes the output directory
}

function start() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var _args = args.filter(function (a) {
		return typeof a === 'function';
	}); // Remove unwanted args

	return gulp.series(gulp.parallel(_args), inlineAssets); // (_args = script, style, html, image)
}


exports.script = script;
exports.style = style;
exports.html = html;
exports.image = image;
exports.registerBasePaths = registerBasePaths;
exports.start = start;
