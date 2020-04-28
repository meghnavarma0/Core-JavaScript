let counter = 0;

// This function gets invoked too many times and is expensive.
const expensive = function(greeting) {
	console.log(
		greeting,

		'Expensive call invoke count',
		counter++
	);
};
// This function limits the invocation of expensive function using throttling ie. the function expensive can only be invoked after a limited period of time.
const throttled = (fun, limit) => {
	let flag = true;

	return function() {
		let context = this,
			args = arguments;

		if (flag) {
			fun.apply(context, args);
			flag = false;
			setTimeout(() => {
				flag = true;
			}, limit);
		}
	};
};

const lessExpensive = throttled(expensive, 300);

window.addEventListener('resize', () => lessExpensive('Welcome'));
