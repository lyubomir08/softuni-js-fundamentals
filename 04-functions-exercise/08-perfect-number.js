function perfectNumber(num) {
    let sumProperDivisors = 0;

    for (let divisor = 1; divisor < num; divisor++) {
        if (num % divisor == 0) {
            sumProperDivisors += divisor;
        }
    }

    if (num == sumProperDivisors) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);
// perfectNumber(28);