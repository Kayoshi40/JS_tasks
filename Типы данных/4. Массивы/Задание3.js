'use strict'

function getMaxSubSum(arr) {
    let maxSum = 0;
    let Sum = 0;

    for (let item of arr) {

        Sum += item;
        maxSum = Math.max(maxSum, Sum);
        if (Sum < 0) Sum = 0;
    }

    return maxSum;
}