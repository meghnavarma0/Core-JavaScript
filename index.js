//Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked. "executed once every 3 seconds!!"
let counter = 0;

const fetching = () => {
	// Making some api calls
	console.log('Fetching Data', counter++);
};
const delaying = (fn, d) => {
	let timer;
	return function() {
		let context = this,
			args = arguments;
		// Does not fetch at smaller intervals than 300ms.
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(context, args);
		}, d);
	};
};
// fetch data only when there is a pause of ateleast 3s between two key strokes
const delayFetch = delaying(fetching, 3000);
