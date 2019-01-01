// TODO: Should be taken from goalup.json as config
var htmlminOpts = {
	caseSensitive: true,
	collapseWhitespace: true, 
	collapseInlineTagWhitespace: true,
	decodeEntities: true,
	minifyJS: true,
	minifyCSS: true,
	preserveLineBreaks: true,
	removeComments: true,
	removeRedundantAttributes: true
};

// TODO: Should be taken from goalup.json as config
var uglifyOpts = {
	compress: {
		drop_console: true,
		dead_code: false,
		drop_console: true,
		join_vars: true,
		collapse_vars: true,
	},
	output: {
		braces: true,
		quote_style: 1,
		comments: 'some'
	},
	mangle: {
		toplevel: true
	}	
}

exports.htmlminOpts = htmlminOpts;
exports.uglifyOpts = uglifyOpts;
