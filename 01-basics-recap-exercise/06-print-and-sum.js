function printSum(start, end) {
    let result = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
        result += i + ' ';
    }

    console.log(result);
    console.log(`Sum: ${sum}`);
}

printSum(5, 10);
// printSum(0, 26);