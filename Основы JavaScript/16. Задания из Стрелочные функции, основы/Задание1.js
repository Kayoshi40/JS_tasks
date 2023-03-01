'use strict'

function ask(question, yes, no) {
    let answer = confirm(question)
    if (answer) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);