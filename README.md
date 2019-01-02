# goalup-minify
This tool automates compression of js, css, html and image files when no build tool is integrated in your project. **(WIP, Work is recently started, so watch out the space if interested)**


**Note:** This tool is not a bundler. It uses popular tools underneath and automates certain tasks for you to have production-ready `/public`, with no setup. In a nutshell, it simply compresses, and output files individually to `/public` directory. There are more plans related to `goalup`. However, `goalup-minify` will only improve upon the sole objective it serves. This tool is great for static websites.

<br />

### Installation:

`npm install -g goalup-minify` [To be up and running in few days]

### Get Started:

`goalup-minify` (Options are required. Paths in options are relative to working directory)

- **Example:**
	1. Copy `/examples` directory to some folder
	2. Run `goalup-minify` inside `/examples`.
	3. `/public`(default name) folder is generated with your minified resources, in the working directory.
	4. **Note:** You can run `goalup-minify` anywhere, however, rem. that paths are relative to  directory where this command is run.

<br />

-----

<br />

### Options:

`goalup-minify --help` to list all the options


### Example Commands:
1. Compress only the listed files. `/public` is default output directory.

`goalup-minify -o hello.js index.js world.css`


2. Creates `dist` as output folder if doesn't exist. Compress all `js_folder/**/**.js` files present in the listed path.

`goalup-minify --js ./js_folder -d ./dist`

3. Compress `js` files in the path and all `**/**.css files` . It ignores all the files in excluded list if present in the aforementioned paths.

`goalup-minify --js ./js_folder --css -x .js_folder/touch_me_not.js .js_folder/touch_me_not.css`


#### Note:
`--watch` option is used in development environment where compressing assets is not required. Therefore, it's not part of plan as of now. However, it can be added on request, to achieve completeness and avoid setup of any additional toolchains. This might be required if someone is serving assets from `/public` directory using local server and not `/src`.

<br />

-----

<br />

### TODO:
- To support `--exclude` option.
- To support `--only` option.
- Validate arguments. To not allowing multiple arguments for any option. Also, `--dest` cannot be same as the working directory. [[IT'S UNSAFE]]
- Add rollup to build goalup-min
- Support es6 in lib for ease of development if complex stuff comes up (Later) :D

<br />

### Further developments:
- Parse .html files and add file name hashing for linked .js and .css files. (--hashing as option). This helps in browser caching
- Add babel support for es6+
- Add support for css preprocessors
- Add font-icons support
