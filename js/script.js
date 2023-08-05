var form = document.getElementById('formId');
function submitForm(event) {
	//Preventing page refresh
	const money = document.getElementById('money').value;
	const share = document.getElementById('share').value;
	const result = document.getElementById('result');
	const result2 = document.getElementById('result2');
	result.innerHTML = 'Potencjalny łup: ' + money * 0.88;
	result2.innerHTML =
		'Twój łup: ' + money * 0.88 * (share / 100).toLocaleString('en-US');

	event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);
