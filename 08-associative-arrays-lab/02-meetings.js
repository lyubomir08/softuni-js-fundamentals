function meetings(arr) {
    let meetings = {};

    for (let row of arr) {
        let [day, name] = row.split(' ');

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        }

        meetings[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    for (let [day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${name}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);