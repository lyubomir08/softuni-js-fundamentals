function intOrFloat(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;

    sum % 1 == 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
}

intOrFloat(9, 100, 1.1);
// intOrFloat(100, 200, 303);