function employees(arr) {
    for (let employeeName of arr) {
        let employee = {name: employeeName, employeeNum: employeeName.length};
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.employeeNum}`);
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);