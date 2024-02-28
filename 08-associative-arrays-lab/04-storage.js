function storage(arr) {
    let map = new Map();

    for (let row of arr) {
        let [product, qnt] = row.split(' ');
        qnt = Number[qnt];

        if (!map.has(product)) {
            map.set(product, qnt);
        } else {
            let curQnt = map.get(product);
            let newQnt = curQnt += qnt;
            map.set(product, newQnt);
        }
    }
    
    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']); 