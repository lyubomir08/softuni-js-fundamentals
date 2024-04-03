function messageDecrypter(arr) {
    let pattern = /^([$%])(?<word>[A-Z][a-z]{2,})\1: \[(?<num1>\d+)\]\|\[(?<num2>\d+)\]\|\[(?<num3>\d+)\]\|$/;
    let lines = arr.shift();

    for (let i = 0; i < lines; i++) {
        let curLine = arr.shift();
        
        if (pattern.test(curLine)) {
            let match = pattern.exec(curLine);
            let tag = match.groups.word;
            let num1 = match.groups.num1;
            let num2 = match.groups.num2;
            let num3 = match.groups.num3;

            let codeNum1 = String.fromCharCode(num1);
            let codeNum2 = String.fromCharCode(num2);
            let codeNum3 = String.fromCharCode(num3);

            console.log(`${tag}: ${codeNum1 + codeNum2 + codeNum3}`);
            
        } else {
            console.log('Valid message not found!');
        }
    }
}

messageDecrypter([
    "4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"
]);