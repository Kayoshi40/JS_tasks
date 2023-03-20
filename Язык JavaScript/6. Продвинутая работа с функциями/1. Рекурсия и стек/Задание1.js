'use strict'

function sumTo1(n) { //цикл
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
 alert( sumTo1(100) ); 

 function sumTo2(n) {//рекурсия
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo2(100) ); 

function sumTo3(n) { //стек
  return n * (n + 1) / 2;
}

alert( sumTo3(100) );
