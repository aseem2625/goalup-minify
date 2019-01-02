var path = require('path');
var chalk = require('chalk');
var compress = require('./gulp.js');

var DEFAULT_PATH = '/';


function lib (opts) {
	// TODO: Validate arguments
	console.log(chalk.bold.cyan('Processing...', JSON.stringify(opts)));

	var basePaths = {
		base: opts.dest || 'public/',
	};

	opts.js &&  (basePaths.script = typeof opts.js === 'boolean' ?  DEFAULT_PATH : opts.js);
	opts.css &&  (basePaths.style = typeof opts.css === 'boolean' ?  DEFAULT_PATH : opts.css)
	opts.html &&  (basePaths.html = typeof opts.html === 'boolean' ?  DEFAULT_PATH : opts.html)
	opts.image &&  (basePaths.image = typeof opts.image === 'boolean' ?  DEFAULT_PATH : opts.image)

	compress.registerBasePaths(basePaths);


	if (opts.js || opts.css || opts.html || opts.image) {
		compress.start(
			opts.js && compress.script,
			opts.css && compress.style,
			opts.html && compress.html,
			opts.image && compress.image
		)();
	}
}


module.exports = lib;
