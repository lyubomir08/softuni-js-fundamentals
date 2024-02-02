function oddEvenSum(num) {
    let numStr =  String(num);

    let oddSum = 0;
    let evenSum = 0;

    for (let char of numStr) {
        let curNum = Number(char);
        
        if (curNum % 2 == 0) {
            evenSum += curNum;
        } else {
            oddSum += curNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(1000435);
// oddEvenSum(3495892137259234);