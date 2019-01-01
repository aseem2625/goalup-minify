#!/usr/bin/env node

var program = require('commander');
var minify = require('./lib').default;

program
	.version('1.0.0')
	.description('goalup-minify automates your work of compressing js, css, html and image files when build tool is not integrated in your project.')

program
	.option('--js <path>', 'Define src path to pick javascript files. By default index.js from working directory is uglified.')
	.option('--css <path>', 'Define src path to pick css files. By default index.css from working directory is processed.')
	.option('--image <path>', 'Define src path to pick image files.')
	.option('--html <path>', 'Define src path to pick html files. By default index.html from working directory is compressed.')
	.option('-w, --watch', 'Option to watch your files and triggers respective minifiers automatically.')
	.option('-d, --dest <dest_path>', 'Define path to output all processed files. By default dist directory is created in working directory. Output path cannot be same as current working directory.')
	.action(function(args) {
		minify({
			js: args.js,
			css: args.css, 
			html: args.html, 
			img: args.image, 
			dest: args.dest,
			watch: args.watch
		});
	});

program.parse(process.argv);
