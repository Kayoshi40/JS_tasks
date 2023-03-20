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

function printReverseList1(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}


function printReverseList2(list) {

    if (list.next) {
        printReverseList2(list.next);
    }

    alert(list.value);
}
