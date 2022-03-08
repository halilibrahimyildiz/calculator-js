const output = document.querySelector('#output');
const buttons = document.querySelector('.buttons');

events();

function events() {
    buttons.addEventListener('click', btnValue);
    output.addEventListener('keydown', keyEvent);
}

function keyEvent(e) {
    removeZero();
    if (e.keyCode == '13') {
        hesapla();
    }
    if (output.value === '0') {
        output.value = ' ';
        output.value = e.target.value;
    }
}

function btnValue(e) {
    var value = e.target.value;
    displayOutput(value);
}

function displayOutput(value) {
    if (value != undefined && value != 'clear' && value != '%' && value != 'equal') {
        removeZero();
        output.value += value;
    } else if (value === 'clear') {
        clear();
    } else if (value === '%') {
        percTo();
    } else if (value === 'equal') {
        hesapla();
    }
}

function hesapla() {
    var denklem = output.value;
    var solved = eval(denklem);
    output.value = solved;
}

function clear() {
    output.value = ' ';
}

function percTo() {
    var value = output.value;
    value = value / 100;
    output.value = value;
}

function removeZero() {
    var value = output.value;

    if (value === '0') {
        value = ' ';
        output.value = value;
    }
}