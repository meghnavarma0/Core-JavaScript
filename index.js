const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src =
	'https://github.com/taniarascia/sandbox/blob/master/ghibli/logo.png?raw=true';

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(logo);
app.appendChild(container);
fetch('https://ghibliapi.herokuapp.com/films')
	.then(response => {
		return response.json();
	})
	.then(data => {
		// Work with JSON data here

		data.forEach(movie => {
			const card = document.createElement('div');
			card.setAttribute('class', 'card');

			const h1 = document.createElement('h1');
			h1.textContent = movie.title;

			const p = document.createElement('p');
			movie.description = `${movie.description.substring(0, 300)}...`;
			p.textContent = movie.description;

			card.appendChild(h1);
			card.appendChild(p);

			container.appendChild(card);
		});
	})
	.catch(err => {
		// Do something for an error here
		console.log('error', err);
	});
