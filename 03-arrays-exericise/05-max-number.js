function maxNum(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];

            if (rightNum >= curNum) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            newArr.push(curNum);
        }
    }

    console.log(newArr.join(' '));
}

maxNum([1, 4, 3, 2]);
// maxNum([14, 24, 3, 19, 15, 17]);