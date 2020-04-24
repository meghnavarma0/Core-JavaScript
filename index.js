const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

let items = localStorage.getItem('items')
	? JSON.parse(localStorage.getItem('items'))
	: [];
const data = JSON.parse(localStorage.getItem('items'));

// localStorage.setItem('items', JSON.stringify(items));

const liMaker = text => {
	const li = document.createElement('li');
	li.textContent = text;
	ul.appendChild(li);
};
if (data) {
	data.map(item => liMaker(item));
}

form.addEventListener('submit', e => {
	e.preventDefault();
	items.push(input.value);
	localStorage.setItem('items', JSON.stringify(items));
	liMaker(input.value);
	input.value = '';
});

button.addEventListener('click', () => {
	localStorage.clear();
	items = [];
	while (ul.firstChild) ul.removeChild(ul.firstChild);
});
