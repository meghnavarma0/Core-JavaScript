const input = document.querySelector('input');
const form = document.querySelector('form');
const bind = document.querySelector('#bind');
const closure = document.querySelector('#closure');
// Function currying is a process of simplyfing the function by passsing arguments for some parameters beforehand so that the function looks simplified.

// This can be achieved by :
// 1. .bind() method.
// 2. using closure.

// 1. Using .bind():
function multiply(x, y) {
	return x * y;
}
function mul(x) {
	return function(y) {
		return x * y;
	};
}

const multiplyByTwo = multiply.bind(this, 2);

const multiplyByThree = mul(3);

form.addEventListener('submit', e => {
	e.preventDefault();
	const val = input.value;
	bind.textContent = multiplyByTwo(val);
	closure.textContent = multiplyByThree(val);
	input.value = '';
});
