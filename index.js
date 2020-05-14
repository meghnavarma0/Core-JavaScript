// Polyfill for Array.prototype.filter()

let arr = [1, 4, 5, 9, 3, 6, 8, 10];

Array.prototype.myFilter = function(callback) {
	let newArray = [];
	let arr = this;
	arr.forEach(element => {
		if (callback(element)) {
			newArray.push(element);
		}
	});
	return newArray;
};

console.log(arr.myFilter(x => x % 2 == 0));
