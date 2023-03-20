'use strict'

function chechAge(age){
    return (age > 18) ?  true : confirm('Родители разрешили?');
}
function chechAge2(age){
    return (age > 18) || confirm('Родители разрешили?');
}