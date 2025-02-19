const x = 1.8;
const y = 32;
let celsius;
let fahrenheit;

const inputCelsius = document.getElementById('inputCelsius');
const valueConverted = document.getElementById('valueConverted');
const submitBtn = document.getElementById('submitBtn');

document.addEventListener("DOMContentLoaded", function () {
    const checkboxFac = document.querySelector("input[name='fac']");
    const checkboxCaf = document.querySelector("input[name='caf']");

    checkboxFac.addEventListener("change", function () {
        if (this.checked) {
            checkboxCaf.checked = false;
        }
    });

    checkboxCaf.addEventListener("change", function () {
        if (this.checked) {
            checkboxFac.checked = false;
        }
    });

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que el formulario se recargue

        let inputValue = parseFloat(inputCelsius.value);

        if (isNaN(inputValue)) {
            valueConverted.textContent = "Por favor, ingresa un número válido.";
            return;
        }

        if (checkboxFac.checked) {
            // Convertir Fahrenheit a Celsius
            celsius = (inputValue - y) / x;
            valueConverted.textContent = `Equivale a ${celsius.toFixed(1)}° Celsius`;
        } else if (checkboxCaf.checked) {
            // Convertir Celsius a Fahrenheit
            fahrenheit = (inputValue * x) + y;
            valueConverted.textContent = `Equivale a ${fahrenheit.toFixed(1)}° Fahrenheit`;
        } else {
            valueConverted.textContent = "Por favor, selecciona una opción de conversión.";
        }
    });
});
