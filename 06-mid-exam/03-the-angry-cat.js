function theAngryCat(arr, entryPoint, typeOfItems) {
    let leftCheapSum = 0;
    let rigthCheapSum = 0;
    let leftExpensiveSum = 0;
    let rightExpensiveSum = 0;

    let number = arr[entryPoint];

    for (let i = 0; i < arr.length; i++) {
        if (typeOfItems == 'cheap') {
            if (arr[i] < number) {
                if (i < entryPoint) {
                    leftCheapSum = leftCheapSum + arr[i];
                }
                if (i > entryPoint) {
                    rigthCheapSum = rigthCheapSum + arr[i];
                }
            }
        }
        if (typeOfItems == 'expensive') {
            if (arr[i] >= number) {
                if (i < entryPoint) {
                    leftExpensiveSum = leftExpensiveSum + arr[i];
                }
                if (i > entryPoint) {
                    rightExpensiveSum = rightExpensiveSum + arr[i];
                }
            }
        }
    }

    if (typeOfItems == 'cheap') {
        if (leftCheapSum >= rigthCheapSum) {
            console.log(`Left - ${leftCheapSum}`);
        } else {
            console.log(`Right - ${rigthCheapSum}`);
        }
    } else {
        if (leftExpensiveSum >= rightExpensiveSum) {
            console.log(`Left - ${leftExpensiveSum}`);
        } else {
            console.log(`Right - ${rightExpensiveSum}`);
        }
    }
}

theAngryCat([1, 5, 1], 1, "cheap");
// theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");