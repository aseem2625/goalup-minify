var chalk = require('chalk');
var path = require('path');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

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
        .pipe(uglify(opts.uglifyOpts).on('error', handleError))
	    .pipe(gulp.dest(path.join(workingDir, config.basePath, config.script)))
	    .on('end', logger('...JS compressed'))
	    .on('error', handleError);
}

/*
 * 2. Styles
*/
function style() {
  return gulp.src([path.join(workingDir, config.style, '/**/**.css'), config.excludePath])
	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }).on('error', handleError))
    .pipe(cleanCSS().on('error', handleError))
    .pipe(gulp.dest(path.join(workingDir, config.basePath, config.style)))
    .on('end', logger('...CSS compressed'))
    .on('error', handleError);;
}

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
	   .on('error', handleError);;
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

	return gulp.parallel(_args); // (script, style, html, image)
}


exports.script = script;
exports.style = style;
exports.html = html;
exports.image = image;
exports.registerBasePaths = registerBasePaths;
exports.start = start;
