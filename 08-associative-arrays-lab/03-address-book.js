function addressBook(arr) {
    let addressBook = {};

    for (let row of arr) {
        let [name, address] = row.split(':');
        addressBook[name] = address;
    }

    let entries = Object.entries(addressBook);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    let sortedArr = Object.fromEntries(entries);
    
    for (let [name, address] of Object.entries(sortedArr)) {
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);