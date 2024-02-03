function matrix(n) {
    for (let i = 1; i <= n; i++) {
        let curRow = `${n} `.repeat(n);
        console.log(curRow);
    }
}

matrix(3);
// matrix(7);