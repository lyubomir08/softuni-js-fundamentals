function theBiscuitFactory(input) {
    let biscuitsPerWorkeyPerDay = Number(input[0]);
    let workers = Number(input[1]);
    let biscuitsOtherFactory = Number(input[2]);

    let usualProduction = biscuitsPerWorkeyPerDay * workers;
    let total = 0;

    for (let day = 1; day <= 30; day++) {

        if (day % 3 == 0) {
            total += Math.floor(0.75 * usualProduction) ;
        } else {
            total += usualProduction;
        }
    }
    console.log(`You have produced ${total} biscuits for the past month.`);

    if (total > biscuitsOtherFactory) {
        let diff = total - biscuitsOtherFactory;
        let percentage = diff / biscuitsOtherFactory * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else {
        let diff = biscuitsOtherFactory - total;
        let percentage = diff / biscuitsOtherFactory * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }
}

theBiscuitFactory(["78",
"8",
"16000"]);

// theBiscuitFactory((["65",
// "12",
// "26000"])
// );