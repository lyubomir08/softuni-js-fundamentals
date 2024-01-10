function sumOddNums(n) {
    let oddNum = 1;
    let sum = 0;

    while(n > 0) {
        n--;
        console.log(oddNum);
        sum += oddNum;
        oddNum += 2;
    }

    console.log(`Sum: ${sum}`);
}

sumOddNums(5);
sumOddNums(3);