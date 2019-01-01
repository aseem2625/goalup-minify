var chalk = require('chalk');


function lib (opts) {
	console.log(chalk.bold.cyan('Processing...', JSON.stringify(opts)));
}


exports.default = lib;
