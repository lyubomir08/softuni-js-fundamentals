function piccolo(arr) {
    let cars = [];

    for (let car of arr) {
        let [direction, number] = car.split(', ');

        if (direction == 'IN' && !cars.includes(number)) {
            cars.push(number);
        } else if (direction == 'OUT' && cars.includes(number)) {
                let index = cars.indexOf(number);
                cars.splice(index, 1);
        }
    }

    cars.sort((a, b) => a.localeCompare(b));
    
    if (cars.length == 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (let car of cars) {
            console.log(car);
        }
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);