'use strict'


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


function printList1(list) {
    let i = list;

    while (i) {
        alert(i.value);
        i = i.next;
    }
}

function printList2(list) {

    alert(list.value); 

    if (list.next) {
        printList2(list.next);
    }

}



