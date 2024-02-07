function negativeOrPositive(arr) {
    let result = [];

    for (let numStr of arr) {
        let num = Number(numStr);

        if (numStr < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(result.join('\n'));
}

negativeOrPositive(['7', '-2', '8', '9']);
// negativeOrPositive(['3', '-2', '0', '-1']);