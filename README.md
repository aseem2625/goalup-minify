# goalup-minify
This tool automates compression of js, css, html and image files when no build tool is integrated in your project. **(WIP, Work is recently started, so watch out the space if interested)**


**Note:** This tool is not a bundler. It uses popular tools underneath and automates certain tasks for you to have production-ready `/public`, with no setup. In a nutshell, it simply compresses, and output files individually to `/public` directory. There are more plans related to `goalup`. However, `goalup-minify` will only improve upon the sole objective it serves. This tool is great for static websites.


#### Installation:

`npm install -g goalup-minify`

#### Get Started:

`goalup-minify` // Run in working directory

- **Example:**
	1. Copy `/examples` directory to some folder
	2. Run `goalup-minify` inside `/examples`
	3. `/public` folder is generated with your minified resources.


#### Options

`goalup-minify --help` to list all the options


#### Example Commands:
1. Compress only the listed files. `/public` is default output directory.

`goalup-minify -o hello.js index.js world.css`


2. Creates `/dist` as output directory if doesn't exist. Compress only `js` files present in the listed path.

`goalup-minify --js ./js_folder -d ./dist`

3. Compress js files in the path and also, index.css file if present in working directory. It ignore all the files in excluded list if present in the aforementioned paths.

`goalup-minify --js ./js_folder --css -x .js_folder/touch_me_not.js .js_folder/touch_me_not.css` 

-----

#### Note:
`--watch` option is used in development environment where compressing assets is not required. Therefore, it's not part of plan as of now.


#### TODO:
- To handle `--exclude` option.
- Validate arguments. To not allowing multiple arguments for any option. Also, it cannot be same as the working directory. [[UNSAFE]]


#### Further developments:
- Parse .html files and add file name hashing for linked .js and .css files. (--hashing as option). This helps in browser caching
- Add babel support for es6+
- Add support for css preprocessors
- Add font-icons support
