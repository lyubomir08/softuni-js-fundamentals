function addAndSubtract(num1, num2, num3) {
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let result1 = add(num1, num2);
    let result2 = subtract(result1, num3);

    console.log(result2);
}

addAndSubtract(23, 6, 10);
// addAndSubtract(1, 17, 30);