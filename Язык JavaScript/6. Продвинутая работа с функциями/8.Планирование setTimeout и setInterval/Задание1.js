'use strict'

function printNumbersSetInterval(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

function printNumbersSetTimeout(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}