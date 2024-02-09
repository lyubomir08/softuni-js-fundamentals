function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());
    
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        let tokens = command.split(' ');
        
        if (tokens[0] == 'Add') {
            let passengers = Number(tokens[1]);
            wagons.push(passengers);
        } else {
            let passengers = Number(tokens[0]);

            for (let index = 0; index < wagons.length; index++) {
                if (passengers + wagons[index] <= maxCapacity) {
                    wagons[index] += passengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);
// train(['32 54 21 12 4 0 23',
// '75',
// 'Add 10',
// 'Add 0',
// '30',
// '10',
// '75']);