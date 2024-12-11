var form = document.getElementById('formId');
function submitForm(event) {
    // Zapobieganie przeładowaniu strony
    event.preventDefault();

    // Pobieranie wartości z pól formularza
    const ValueX = parseFloat(document.getElementById('ValueX').value) || 0;
    const ValueY = parseFloat(document.getElementById('ValueY').value) || 0;

    // Stała wartość
    const CONSTANT = 32;

    // Obliczanie wartości a1
    const a1Value = ValueX + (CONSTANT * ValueY);

    // Wyświetlanie wyniku
    const a1 = document.getElementById('a1');
    a1.innerHTML = 'a1 = ' + a1Value;
}

// Wywoływanie funkcji podczas przesyłania formularza
form.addEventListener('submit', submitForm);
