function furniture(data) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let price = 0;

    console.log(`Bought furniture:`);
    for (let line of data) {
        if (line == 'Purchase') {
            break;
        }

        if (pattern.test(line)) {
            let product = pattern.exec(line);
            let curPrice = Number(product.groups.price) * Number(product.groups.quantity);
            price += curPrice;
            console.log(product.groups.name);
        }
    }

    console.log(`Total money spend: ${price.toFixed(2)}`);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);