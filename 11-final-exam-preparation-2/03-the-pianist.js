function thePianist(arr) {
    let pieces = {};
    let piecesCount = Number(arr.shift());

    for (let i = 0; i < piecesCount; i++) {
        let line =  arr.shift();
        let [piece, composer, key] = line.split('|');

        pieces[piece] = { composer, key };
    }

    let command = arr.shift();

    while (command != 'Stop') {
        let tokens = command.split('|');
        let action = tokens.shift();

        if (action == 'Add') {
            let [piece, composer, key] = tokens;

            if (piece in pieces) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (action == 'Remove') {
            let piece = tokens.shift();

            if (piece in pieces) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (action == 'ChangeKey') {
            let [piece, newKey] = tokens;

            if (piece in pieces) {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        command = arr.shift();
    }

    for (let [pieceName, pieceInfo] of Object.entries(pieces)) {
        console.log(`${pieceName} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);