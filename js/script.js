var form = document.getElementById('formId');
function submitForm(event) {
	//Preventing page refresh
	const money = document.getElementById('money').value;
	const share = document.getElementById('share').value;
	const result = document.getElementById('result');
	const result2 = document.getElementById('result2');
	result.innerHTML = 'Global Loot: ' + (money * 0.88).toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace(',', ' ');
	result2.innerHTML = 'Your Loot: ' + (money * 0.88 * (share / 100)).toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace(',', ' ');

	event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);
