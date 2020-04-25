const name = {
	firstname: 'Meghna',
	lastname: 'Varma'
};

const printName = function(city, country) {
	console.log(
		`Hey I am ${this.firstname} ${this.lastname} from ${city}, ${country}`
	);
};

// Passes reference to this keyword and returns a copy of the function where the this keyword points to the object passed.
myprint = printName.bind(name, 'Lucknow');
myprint('India');

// Function.prototype adds mybind function to __proto__ and som makes mybind() available for all the functions.
Function.prototype.mybind = function(...args) {
	const that = this;
	const args1 = args.slice(1);
	return function(...args2) {
		that.apply(args[0], [...args1, ...args2]);
	};
};

myprint2 = printName.mybind(name, 'Lucknow');
myprint2('India');
