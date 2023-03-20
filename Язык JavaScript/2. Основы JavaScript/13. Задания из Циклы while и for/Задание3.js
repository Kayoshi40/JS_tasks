'use strict';

let num = 0;
while(1){
    num = prompt('Введите число больше 100','');
    if (num == null || num > 100 || num == '') break;
}