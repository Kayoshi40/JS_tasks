'use strict'

function pow(x, n){
    return (x ** n);
}
let x = prompt('Введите число','');
let n = prompt('Введите степень','');
if (!(n < 1)){
alert(pow(x,n));
}
else{
    alert('Неверная степень');
}