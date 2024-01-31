function mathPower(n, exponent) {
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= n;
    }

    console.log(result);
}

mathPower(2, 8);
// mathPower(3, 4);