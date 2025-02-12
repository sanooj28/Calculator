document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");

    window.appendValue = function (value) {
        display.value += value;
    };

    window.clearDisplay = function () {
        display.value = '';
    };

    window.calculateResult = function () {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
            setTimeout(() => display.value = '', 1500);
        }
    };
});
