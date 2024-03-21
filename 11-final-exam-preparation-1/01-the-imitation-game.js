function solve(input) {
    let arr = input.slice(0);
    let message = arr.shift();
    let command = arr.shift();

    while (command != 'Decode') {
        let tokens = command.split('|');
        let action = tokens.shift();
        let temp = '';

        if (action == 'Move') {
            let lettersNumber = Number(tokens[0]);
            let lettersToRemove = message.substring(0, lettersNumber);
            temp = message.replace(lettersToRemove, '');
            temp +=  lettersToRemove;
            message = temp;
        } else if (action == 'Insert') {
            let idx = Number(tokens[0]);
            let value = tokens[1];

            temp = message.split('');
            temp.splice(idx, 0, value);
            message = temp.join('');
        } else if (action == 'ChangeAll') {
            let substring = tokens[0];
            let replacement = tokens[1];

            while (message.includes(substring)) {
                temp = message.replace(substring, replacement);
                message = temp;
            }

            message = temp;
        }
        command = arr.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);