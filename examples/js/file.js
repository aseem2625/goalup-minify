/** @license Important comments are preserved */

/* Comments are removed */
// Comments are removed

console.log('Comments are removed everywhere');

function big_function_name(){
	console.log('The fn. name is uglified');
	console.log('Unreachable code is not removed because it\'s not a build tool. So, fn might be getting consumed in other file.');

	var a = "Quotes are turned single quotes";
}

function somename() {
	fn2();
}