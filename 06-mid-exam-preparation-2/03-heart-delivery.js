function heartDelivery(arr) {
    let neighbourhood = arr.shift().split('@').map(Number);
    let command = arr.shift();

    let total = 0;

    while (command != 'Love!') {
        let result = command.split(' ');
        total += Number(result[1]);
        
        if (total >= neighbourhood.length) {
            total = 0;
        }

        if (neighbourhood[total] == 0) {
            console.log(`Place ${total} already had Valentine's day.`);
        } else {
            neighbourhood[total] -= 2;

            if (neighbourhood[total] == 0) {
                console.log(`Place ${total} has Valentine's day.`);
            }
        }

        command = arr.shift();
    }

    console.log(`Cupid's last position was ${total}.`);

    let resultArray = [];
    let flagResult = true;

    for (let element of neighbourhood) {
        if (element != 0) {
            flagResult = false;
            resultArray.push(element);
        }
    }

    if (flagResult) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${resultArray.length} places.`);
    }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
// heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);