function phoneBook(arr) {
    let phoneBook = {};

    for (let row of arr) {
        let [name, phoneNumber] = row.split(' ');
        phoneBook[name] = phoneNumber;
    }

    for (let [personName, phoneNumber] of  Object.entries(phoneBook)) {
        console.log(`${personName} -> ${phoneNumber}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);