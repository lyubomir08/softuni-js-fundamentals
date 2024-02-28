function schoolGrades(arr) {
    let schoolGrades = {};

    for (let row of arr) {
        let tokens = row.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);
        
        if (schoolGrades.hasOwnProperty(name)) {
            grades.forEach(el => schoolGrades[name].push(el));
        } else {
            schoolGrades[name] = grades;
        }
    }
    let entries = Object.entries(schoolGrades);

    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let student of entries) {
        let avgSum = student[1].reduce((acc, val) => acc + val) / student[1].length;
        student[1] = avgSum;
    }

    let final = Object.fromEntries(entries);

    for (let [key, value] of Object.entries(final)) {
        console.log(`${key}: ${Number(value).toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);