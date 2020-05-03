// Creating elements for respective ids
const dad = document.querySelector('#dad');
const mum = document.querySelector('#mum');
const bro = document.querySelector('#bro');
const meg = document.querySelector('#meg');

// According to W3C standatds, event capturing occurs followed by event bubbling.
// Capturing : Trickling: Top - Down Propagation
// Bubbling : Bottom - Up Propagation

dad.addEventListener(
	'click',

	e => {
		console.log('Shaking hands with her dad.');
		e.stopPropagation();
	},
	true // Capturing
);
mum.addEventListener(
	'click',
	() => {
		console.log('Shaking hands with her mum.');
	},
	false // Bubbling
);
bro.addEventListener(
	'click',
	() => {
		console.log('Shaking hands with her brother.');
	},
	true // Capturing
);

meg.addEventListener(
	'click',
	() => {
		console.log('Shaking hands with Meghna!');
	},
	false // Bubbling
);
