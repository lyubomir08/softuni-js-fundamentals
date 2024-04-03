function hogwarts(arr) {
    let spell = arr.shift();
    let command = arr.shift();

    while (command != 'Abracadabra') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action == 'Abjuration') {
            console.log(spell.toUpperCase());
        } else if (action == 'Necromancy') {
            console.log(spell.toLowerCase());
        } else if (action == 'Illusion') {
            let [index, letter] = tokens;
            index = Number(index);

            if (index >= 0 && index <= spell.length) {
                spell = spell.slice(0, index) + letter + spell.slice(index + 1);
                console.log('Done!');
            } else {
                console.log('The spell was too weak.');
            }
        } else if (action == 'Divination') {
            let [firstSubstring, secondSubstring] = tokens;
            spell = spell.replaceAll(new RegExp(firstSubstring, 'g'), secondSubstring);
            console.log(spell);
        } else if (action == 'Alteration') {
            let substring = tokens.shift();
            
            if (spell.includes(substring)) {
                spell = spell.replace(substring, '');
            }

            console.log(spell);
        } else {
            console.log('The spell did not work!');
        }

        command = arr.shift();
    }
}

hogwarts([
    "SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"
]);