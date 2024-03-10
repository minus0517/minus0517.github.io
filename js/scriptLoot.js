var form = document.getElementById('formId');
function submitForm(event) {
	//Preventing page refresh
	event.preventDefault();

	const cash = document.getElementById('cash').value;
	const weed = document.getElementById('weed').value;
	const coke = document.getElementById('coke').value;
	const gold = document.getElementById('gold').value;
	const artwork = document.getElementById('artwork').value;
	const mainloot = document.getElementById('mainloot').value;

	const lootmin = document.getElementById('lootmin');
	const lootmax = document.getElementById('lootmax');

	lootmin.innerHTML =
		'Min Loot: ' +
		(cash * 78750 +
			weed * 130500 +
			coke * 198000 +
			gold * 328333 +
			artwork * 157500 +
			mainloot * 1000);

	lootmax.innerHTML =
		'Max Loot: ' +
		(cash * 83250 +
			weed * 135000 +
			coke * 202500 +
			gold * 333333 +
			artwork * 180000 +
			mainloot * 1000);
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);
