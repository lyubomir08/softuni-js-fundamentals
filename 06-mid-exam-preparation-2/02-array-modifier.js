function arrayModifier(arr) {
    let numbers = arr.shift().split(' ').map(Number);
    let command = arr.shift();

    while (command != 'end') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action == 'swap') {
            let index1 = Number(tokens.shift());
            let index2 = Number(tokens.shift());

            let t = numbers[index1];
            numbers[index1] = numbers[index2];
            numbers[index2] = t;
        } else if (action == 'multiply') {
            let index1 = Number(tokens.shift());
            let index2 = Number(tokens.shift());
            let result = numbers[index1] * numbers[index2];
            numbers[index1] = result;
        } else if (action == 'decrease') {
            numbers = numbers.map(n => n - 1);
        }

        command = arr.shift();
    }

    console.log(numbers.join(', '));
}

arrayModifier(['23 -2 321 87 42 90 -123','swap 1 3','swap 3 6','swap 1 0','multiply 1 2','multiply 2 1',
'decrease','end']);
// arrayModifier([ '1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end' ]);