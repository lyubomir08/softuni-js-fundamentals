function arrayManipulations(arr) {
    let arrOfNumbers = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        let tokens = command.split(' ');
        
        let action = tokens[0];

        if (action == 'Add') {
            let number = Number(tokens[1]);

            arrOfNumbers.push(number);
        } else if (action == 'Remove') {
            let number = Number(tokens[1]);

           for (let i = 0; i < arrOfNumbers.length; i++) {
                let num = Number(arrOfNumbers[i]);

                if (num == number) {
                    arrOfNumbers.splice(num, 1);
                }
           }
        } else if (action == 'RemoveAt') {
            let index = Number(tokens[1]);

            arrOfNumbers.splice(index, 1);
        } else if (action == 'Insert') {
            let number = Number(tokens[1]);
            let index = Number(tokens[2]);

            arrOfNumbers.splice(index, 0, number);
        }
    }

    console.log(arrOfNumbers.join(' '));
}

arrayManipulations(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']);
// arrayManipulations(['6 12 2 65 6 42','Add 8','Remove 12','RemoveAt 3','Insert 6 2']);