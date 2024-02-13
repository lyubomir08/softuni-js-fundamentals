function movingTarget(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let command = arr.shift();

    while (command != 'End') {
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action == 'Shoot') {
            let index =  Number(tokens[1]);
            let power = Number(tokens[2]);

        if (index >= 0 && index < targets.length) {
                targets[index] -= power;

                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }
        } else if (action == 'Add') {
            let index = Number(tokens[1]);
            let value = Number(tokens[2]);

            if (index >= 0 && index < targets.length) {
                targets.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (action == 'Strike') {
            let index = Number(tokens[1]);
                let radius = Number(tokens[2]);

                if (index - radius >= 0 && index + radius < targets.length) {
                    targets.splice(index - radius, radius * 2 + 1);
                } else {
                    console.log("Strike missed!");
                }
        }

        command = arr.shift();
    }

    console.log(targets.join('|'));
}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]);
// movingTarget((["1 2 3 4 5",
// "Strike 0 1",
// "End"]));