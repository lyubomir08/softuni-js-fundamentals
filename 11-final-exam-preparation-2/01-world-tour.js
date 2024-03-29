function worldTour(arr) {
    let stops = arr.shift();
    let command = arr.shift();

    while (command != 'Travel') {
        let tokens = command.split(':');
        let action = tokens.shift();
        
        if (action = 'Add Stop') {
            let [idx, str] = tokens;
            idx = Number(idx);

            if (idx >= 0 && idx < stops.length) {
                stops = stops.slice(0, idx) + str + stops.slice(idx);
            } 
        } else if (action == 'Remove Stop') {
            let [startIdx, endIdx] = tokens;
            startIdx = Number(startIdx);
            endIdx = Number(endIdx);

            if (startIdx >= 0 && endIdx < stops.length) {
                stops = stops.slice(0, startIdx) + stops.slice(endIdx + 1);
            }
        } else {
            let [oldStr, newStr] = tokens;

            while (stops.includes(oldStr)) {
                stops = stops.replace(oldStr, newStr);
            }
        }

        console.log(stops);
        command = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);