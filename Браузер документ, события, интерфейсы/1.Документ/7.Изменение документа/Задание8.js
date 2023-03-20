'use strict'

let div = document.createElement('div');

div.innerHTML = '<span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>';
div.className('clock');

let timerId;

function clockStart() { 
    timerId = setInterval(update, 1000);
    update(); 
}

function clockStop() {
    clearInterval(timerId);
    timerId = null;

}
function update() {
    let clock = document.getElementById('clock');
    let date = new Date(); // (*)
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}

let buttonStart = document.createElement('button');
let buttonUpdate = document.createElement('button');

buttonStart.innerHTML = 'Start';
buttonUpdate.innerHTML = 'Update';

document.body.appendChild(buttonStart);
document.body.appendChild(buttonUpdate);

buttonStart.onclick = clockStart();
buttonUpdate.onclick = update();