function degustationParty(arr) {
    let guestsMeals = {};
    let unlikedMealsCount = 0;
    let command = arr.shift();

    while (command != 'Stop') {
        let tokens = command.split('-');
        let action = tokens.shift();
        let name = tokens.shift();
        let meal = tokens.shift();

        if (action == 'Like') {
            if (!guestsMeals[name]) {
                guestsMeals[name] = [];
            }

            if (!guestsMeals[name].includes(meal)) {
                guestsMeals[name].push(meal);
            }
            
        } else if (action == 'Dislike') {
            if (guestsMeals[name]) {
                let mealIndex = guestsMeals[name].indexOf(meal);

                if (mealIndex !== -1) {
                    guestsMeals[name].splice(mealIndex, 1);
                    console.log(`${name} doesn't like the ${meal}.`);
                    unlikedMealsCount++;
                } else {
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                }
            } else {
                console.log(`${name} is not at the party.`);
            }
        }

        command = arr.shift();
    }

    for (let [name, info] of Object.entries(guestsMeals)) {
        let totalMeals = [];
        for (let meal of info) {
            totalMeals.push(meal);
        }
        console.log(`${name}: ${totalMeals.join(', ')}`);
    }
    console.log(`Unliked meals: ${unlikedMealsCount}`);
}

degustationParty([
    "Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"
]);