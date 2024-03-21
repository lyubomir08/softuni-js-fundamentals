function pirates(input) {
    let city = {};
    let citiesArr = [];

    let line = input.shift();

    while (line != 'Sail') {
        let [city, population, gold] = line.split('||');
        gold = Number(gold);
        population = Number(population);
        
        let result = citiesArr.find(c => c.city == city);
        let idx = citiesArr.indexOf(result);

        if (result) {
            citiesArr[idx].population += population;
            citiesArr[idx].gold += gold;
        } else {
            city = {city, population, gold};
            citiesArr.push(city);
        }

        line = input.shift();
    }

    let command = input.shift();

    while (command != 'End') {
        let cmd =  command.split('=>');
        let action = cmd.shift();

        if (action == 'Plunder') {
            let city = cmd[0];
            let population = cmd[1];
            let gold = Number(cmd[2]);

            let result = citiesArr.find(c => c.city == city);
            let idx = citiesArr.indexOf(result);

            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);

            citiesArr[idx].population -= population;
            citiesArr[idx].gold -= gold;

            if (citiesArr[idx].population <= 0 || citiesArr[idx].gold <= 0) {
                console.log(`${city} has been wiped off the map!`);
                citiesArr.splice(idx, 1);
            }
        } else if (action == 'Prosper') {
            let city = cmd[0];
            let gold = Number(cmd[1]);

            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                let result = citiesArr.find(c => c.city == city);
                let idx = citiesArr.indexOf(result);

                citiesArr[idx].gold += gold;

                console.log(`${gold} gold added to the city treasury. ${city} now has ${citiesArr[idx].gold} gold.`);
            }
        }

        command = input.shift();
    }

    if (citiesArr.length == 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${citiesArr.length} wealthy settlements to go to:`);
        for (let city of citiesArr) {
        console.log(`${city.city} -> Population: ${city.population} citizens, Gold: ${city.gold} kg`);
        }
    }
}

pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);