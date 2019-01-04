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
	big_function_name();
}

/* ES6 Features: Arrow function support */
const es6Feature = () => {
	console.log('Successfully checks for es6 features');
}

function HOCFunc(_wrappedClass) {
	return class extends _wrappedClass {
		constructor(initStuffs) {
			super(initStuffs);
			this.extended_property = 'Wow.. I got it from HOC';
		}
	}
}

/* Decorators support */
@HOCFunc
class BabyClass {
	constructor(initStuffs) {
		this.secureVar = initStuffs;
	}

	someMethod(param) {
		const self = this; // ES6 Features: const are supported
		console.log('Wow I\'m not Baby anymore. I\'ve HOC power', self);
	}
}

new BabyClass().someMethod();