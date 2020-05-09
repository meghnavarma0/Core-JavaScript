// Event delegation is the act of attaching the event listener with the parent instead of so many children.
document.querySelector('#form').addEventListener('keyup', event => {
	if (event.target.dataset.uppercase != undefined) {
		event.target.value = event.target.value.toUpperCase();
	}
});
