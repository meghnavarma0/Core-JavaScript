// The outer functions parameters and variables define inner function's lexical scope.

const outerFunction = (...args) => {
	let text = 'Lexical Scope';
	const innerFunction = () => {
		console.log(text);
		for (let i = 0; i < args.length; i++) {
			console.log(args[i]);
		}
	};
	innerFunction();
};
outerFunction(1, 2, 5, 6);

// output:
// Lexical Scope
// 1
// 2
// 5
// 6

// The inner function has access to the outer functions parameters and variables. This is called as lexical scoping.
