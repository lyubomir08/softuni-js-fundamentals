function repeatStr(str, n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += str;
    }

    return result;
}

console.log(repeatStr("abc", 3));
// console.log(repeatStr("String", 2));