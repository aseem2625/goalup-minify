<p align="center">
  <img width="240px" src="https://user-images.githubusercontent.com/6055628/50710526-41197300-1091-11e9-9a0e-8e7817cc286a.png">
	
  <p align="center"><b>Get Set Deploy!</b> Generate production-ready code for Static websites</p>
</p>


<br />

## What is goalup-minify?
This tool creates Production-ready code in just 1 command. It runs popular tools (gulp, etc.) underneath to compress JS, CSS, HTML and Images. **Note:** *This is not a bundler. In a nutshell, files are individually processed and output to `/public` directory.* `goalup-minify` is purposed for static websites if no bundler / build tool is integrated in your project.
<br />
Check **Ongoing** section for more details.

<br />

## Installation:

`npm install -g goalup-minify`

## Getting Started:

`goalup-minify` (Options are mandatory)

- **Example:**
	1. Copy `/examples` directory to some folder
	2. Run `goalup-minify` inside `/examples`.
	3. `/public`(default name) folder is generated with your minified resources, in the working directory.
	4. **Note:** You can run `goalup-minify` anywhere, however, rem. that paths are relative to  directory where this command is run.

<br />

-----

<br />

## Options:

`goalup-minify --help` to list all the options


## Example Commands:
**Note:** Paths in options are relative to working directory

1. Compress only the listed files. `/public` is default output directory.

`goalup-minify -o hello.js index.js world.css`


2. Creates `dist` as output folder if doesn't exist. Compress all `js_folder/**/**.js` files present in the listed path.

`goalup-minify --js ./js_folder -d ./dist`

3. Compress `js` files in the path and all `**/**.+(css|scss) files` . It ignores all the files in excluded list if present in the aforementioned paths.

`goalup-minify --js ./js_folder --style -x .js_folder/touch_me_not.js .js_folder/touch_me_not.css`


### Note:
`--watch` option is used in development environment where compressing assets is not required. Therefore, it's not part of plan as of now. However, it can be added on request, to achieve completeness and avoid setup of any additional toolchains. This might be required if someone is serving assets from `/public` directory using local server and not `/src`.

<br />

-----

<br />

### Ongoing development:
- To support `--exclude` option.
- To support `--only` option.
- Validate arguments. To not allowing multiple arguments for any option. Also, `--dest` cannot be same as the working directory. [[CUZ THAT'S UNSAFE]]
- Add support for css preprocessors [Soon]
- Add font-icons support [Soon]

<br />

### Further plans:
- Parse .html files and add file name hashing for linked .js and .css files. (--hashing as option). This helps in browser caching
- Configrations for htmlmin, uglifyJS, etc. By default standard and lenient rules would be added, however, custom support can be added on request.
- Create a boilerplate for static websites using CLI. (Internally would use `goalup-minify` as build too).

<br />

### TODO
- Support es6 for goalup lib for ease of development (Later) ;)
