function spaceTravel(arr) {
    let travelRoute = arr.shift().split('||');
    let startingFuel = Number(arr.shift());
    let startingAmmo = Number(arr.shift());

    for (let command of travelRoute) {
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action == 'Travel') {
            let num = Number(tokens[1]);

            let needFuel = num;
            if (needFuel < startingFuel) {
                console.log(`The spaceship travelled ${num} light-years.`);
            } else {
                console.log("Mission failed.");
                return;
            }
        } else if (action == 'Enemy') {
            let enemyArmour = Number(tokens[1]);

            if (startingAmmo >= enemyArmour) {
                startingAmmo -= enemyArmour;
                console.log(`An enemy with ${enemyArmour} armour is defeated.`);
            } else if (startingAmmo < enemyArmour) {
                let consumedFuel = enemyArmour * 2;
                startingFuel -= consumedFuel;
                if (startingFuel > 0) {
                    console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
                } else {
                    console.log("Mission failed.");
                    return;
                }
            } 
        } else if (action == 'Repair') {
            let ammoAndFuelAdded = Number(tokens[1]);

            startingFuel += ammoAndFuelAdded;
            startingAmmo += ammoAndFuelAdded * 2;

            console.log(`Ammunitions added: ${ammoAndFuelAdded * 2}.`);
            console.log(`Fuel added: ${ammoAndFuelAdded}.`);
        } else if (action == 'Titan') {
            console.log("You have reached Titan, all passengers are safe." );
            return;
        }
    }
}

// spaceTravel([ 'Travel 10||Enemy 30||Repair 15||Titan', 
// '50', 
// '80' ]);
spaceTravel(([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ])
);