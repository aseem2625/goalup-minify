#!/usr/bin/env node

var program = require('commander');
var minify = require('./lib').default;

program
	.version('1.0.0')
	.description('goalup-minify automates your work of compressing js, css, html and image files when build tool is not integrated in your project.')

program
	.option('--js [path]', 'Define src path to pick javascript files. By default only index.js from working directory is uglified. If option is missing, then .js are not processed.')
	.option('--css [path]', 'Define src path to pick css files. By default only index.css from working directory is processed. If option is missing .css files are not processed.')
	.option('--image <path>', 'Define src path to pick image files.')
	.option('--html [path]', 'Define src path to pick html files. By default only index.html from working directory is compressed. If option is missing no .html files are not processed')
	.option('-x --exclude <files>', 'Define files to be excluded from the process.')
	.option('-o --only <files>', 'Only these files will be compresssed. This option is to be used independent of all above options.')
	.option('-w, --watch', 'Option to watch your above files and trigger respective minifiers automatically.')
	.option('-d, --dest <dest_path>', 'Define path to output all processed files. By default "/public" directory is created in working directory. Output path cannot be same as current working directory.')
	.action(function(args) {
		minify({
			js: args.js,
			css: args.css,
			html: args.html,
			img: args.image,
			exclude: args.exclude,
			only: args.only,
			dest: args.dest,
			watch: args.watch
		});
	});

program.parse(process.argv);
