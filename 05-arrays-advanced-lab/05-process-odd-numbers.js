function processOddNums(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);

        if (i % 2 !== 0) {
            newArr.push(num * 2);
        }
    }

    let finalResult = [];

    for (let i = newArr.length - 1; i >= 0; i--) {
        finalResult.push(newArr[i]);
    }

    console.log(finalResult.join(' '));
}

processOddNums([10, 15, 20, 25]);
// processOddNums([3, 0, 10, 4, 7, 3]);