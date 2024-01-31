function signCheck(first, second, last) {
    function multiplyNumOneAndNumTwo(first, second) {
        return first * second;
    }

    let multiplyNumOneAndNumTwoResult =  multiplyNumOneAndNumTwo(first, second);
    let result = multiplyNumOneAndNumTwoResult * last;

    if (result > 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

signCheck(5, 12, -15);
// signCheck(-6, -12, 14);