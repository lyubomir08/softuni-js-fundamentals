function triangleNums(maxRow) {
    for (let num = 1; num <= maxRow; num++) {
        console.log(`${num} `.repeat(num));
    }
}

triangleNums(3);
// triangleNums(5);