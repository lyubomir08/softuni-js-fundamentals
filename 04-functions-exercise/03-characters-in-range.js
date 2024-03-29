function charsInRange(char1, char2) {
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let minCode = Math.min(code1, code2);
    let maxCode = Math.max(code1, code2);

    let result = '';

    for (let curCode = minCode + 1; curCode < maxCode; curCode++) {
        let curChar = String.fromCharCode(curCode);
        result +=  curChar + ' ';
    }
    
    console.log(result);
}

charsInRange('a', 'd');
// charsInRange('#', ':');