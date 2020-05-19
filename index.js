// Polyfill for Array.prototype.filter()

// the filter method returns a new array which consists of the elements that satisfy the condition thrown by the callback function over the given array.

// This method does not mutate the original array.

let arr = [1, 4, 5, 9, 3, 6, 8, 10];

// The function below returns a filtered array of only the even numbers.

Array.prototype.myFilter = function(callback) {
	let newArray = [];
	let passedArray = this;
	passedArray.forEach(element => {
		if (callback(element)) {
			newArray.push(element);
		}
	});
	return newArray;
};

console.log(arr.myFilter(x => x % 2 == 0));

// Output
// [4, 6, 8, 10]
