'use strict';

let n = prompt('Введите граничное цисло','');
for(let i = 2; i <= n; i++){
    let counter = 0;
    for(let j = 1; j <= i; j++){
        if(i % j == 0){
            counter++
        }
    }
    if (counter == 2){
        alert(i);
    }
}