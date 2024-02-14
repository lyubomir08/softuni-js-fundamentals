function softuniReception(input) {
    let employeeOne = Number(input.shift());
    let employeeTwo = Number(input.shift());
    let employeeThree = Number(input.shift());
    let people = Number(input.shift());

    let hours = 0;
    let clientsPerHour = employeeOne + employeeTwo + employeeThree;

    while (people > 0) {
        hours++;
        people -= clientsPerHour;

        if (hours % 4 == 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

softuniReception(['5','6','4','20']);
// softuniReception(['1','2','3','45']);