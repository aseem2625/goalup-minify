#!/usr/bin/env node

var program = require('commander');
var minify = require('./lib').default;

program
	.version('1.0.0')
	.description('goalup-minify automates your work of compressing js, css, html and image files when build tool is not integrated in your project.')

program
	.option('--js [path]', 'Define src path to pick javascript files. Default path is working directory. If option is missing, no .js is processed.')
	.option('--css [path]', 'Define src path to pick css files. Default path is  working directory. If option is missing, no .css is processed.')
	.option('--image <path>', 'Define src path to pick image files. Default path is working directory. If option is missing, no images are proccessed')
	.option('--html [path]', 'Define src path to pick html files. Default path is working directory. If option is missing, no .html is processed')
	.option('-x --exclude <files>', 'Define files to be excluded from the process.')
	.option('-o --only <files>', 'Only these files will be compresssed. This option is to be used independent of all above options.')
	.option('-d, --dest <dest_path>', 'Define path to output all processed files. By default "/public" directory is created in working directory. Output path cannot be same as current working directory.')
	.action(function(args) {
		minify({
			js: args.js,
			css: args.css,
			html: args.html,
			image: args.image,
			exclude: args.exclude,
			only: args.only,
			dest: args.dest
		});
	});

program.parse(process.argv);
