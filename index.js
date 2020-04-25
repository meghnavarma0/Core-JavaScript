const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// According to W3C standatds, event capturing occurs followed by event bubbling.
// Capturing : Trickling: Top - Down Propagation
// Bubbling : Bottom - Up Propagation

grandparent.addEventListener(
	'click',
	e => {
		console.log('Grand Parent Clicked');
		e.stopPropagation(); // Prevents further propagation of the event
	},
	true // Capturing
);
parent.addEventListener(
	'click',
	() => {
		console.log('Parent Clicked');
	},
	false // Bubbling
);
child.addEventListener(
	'click',
	() => {
		console.log('Child Clicked');
	},
	false // Bubbling
);
