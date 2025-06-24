function convert(from) {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    let celsius, fahrenheit;

    if (from === 'celsius') {
        celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            fahrenheit = (celsius * 9 / 5) + 32;
            fahrenheitInput.value = fahrenheit.toFixed(2);
        } else {
            fahrenheitInput.value = '';
        }
    } else {
        fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            celsius = (fahrenheit - 32) * 5 / 9;
            celsiusInput.value = celsius.toFixed(2);
        } else {
            celsiusInput.value = '';
        }
    }
}

function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
}