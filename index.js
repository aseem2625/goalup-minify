var program = require('commander');
var minify = require('./lib');

program
	.version('1.3.0')
	.description('goalup-minify automates your work of compressing js, css, html and image files when build tool is not integrated in your project.')

program
	.option('--js [path]', 'Path for js files. Default path is working directory. If option is missing, no .js is processed.')
	.option('--style [path]', 'Path for styles files. Default path is  working directory. If option is missing, no style file is processed.')
	.option('--image <path>', 'Path for image files. Image path is mandatory. If option is missing, no images are proccessed')
	.option('--html [path]', 'Path for html files. Default path is working directory. If option is missing, no .html is processed')
	.option('-x --exclude <files>', 'List of files to be excluded from the process.')
	.option('-o --only <files>', 'Only these files will be compresssed. Used it independent of all above options.')
	.option('-d, --dest <dest_path>', 'Path to output all processed files. By default "/public" directory is created in working directory. Output path cannot be same as current working directory.')
	.action(function(args) {
		minify({
			js: args.js,
			style: args.style,
			html: args.html,
			image: args.image,
			exclude: args.exclude,
			only: args.only,
			dest: args.dest
		});
	});

program.parse(process.argv);
