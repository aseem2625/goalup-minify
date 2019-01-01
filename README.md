# goalup-minify
This tool automates compression of js, css, html and image files when no build tool is integrated in your project. **(WIP, Work is recently started, so watch out the space if interested)**


**Note:** This tool is not a bundler. It uses popular tools underneath and automates certain tasks for you to have production-ready `/public`, with no setup. In a nutshell, it simply compresses, and output files individually to `/public` directory. There are more plans related to `goalup`. However, `goalup-minify` will only improve upon the sole objective it serves. This tool is great for static websites.


#### Installation:

`npm install -g goalup-minify`

#### Command for compressing:

`goalup-minify` // Run in working directory


#### Options

`goalup-minify --help` to list all the options


#### Examples
1. Compress only the listed files. `/public` is default output directory.

`goalup-minify -o hello.js index.js world.css`


2. Creates `/dist` as output directory if doesn't exist. Compress only `js` files present in the listed path.

`goalup-minify --js ./js_folder -d ./dist`

3. Compress js files in the path and also, index.css file if present in working directory. It ignore all the files in excluded list if present in the aforementioned paths.

`goalup-minify --js ./js_folder --css -x .js_folder/touch_me_not.js .js_folder/touch_me_not.css` 

4. Watch option is generally not required while development, so support will be added when required.


#### Further ideas:
- Parse .html files and add file name hashing for linked .js and .css files. (--hashing as option)
- Add babel support
- Add support for css preprocessors and auto-prefixers.
- Add example project for real-life use case
- Add font-icons support

