function companyUsers(arr) {
    let companyEmployees = {};

    for (let row of arr) {
        let [company, id] = row.split(' -> ');

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(id)) {
                companyEmployees[company].push(id);
            }
        } else {
            companyEmployees[company] = [id];
        }
    }

    let sorted = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, ids] of sorted) {
        console.log(company);
        ids.forEach(id =>  console.log(`-- ${id}`));
    }
}

companyUsers(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);