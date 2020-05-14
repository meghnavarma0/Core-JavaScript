// Polyfill for Array.prototype.map() function
let arr = [6, 9, 3, 7, 12];

Array.prototype.myMap = function(callback) {
	let newArray = [];
	let arr = this;
	for (let i = 0; i < arr.length; i++) {
		newArray.push(callback(arr[i]));
	}
	return newArray;
};

console.log(arr.map(x => 2 * x));
