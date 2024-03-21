function adAstra(input) {
    let pattern = /([\|#])(?<name>[A-Za-z ]+)\1(?<date>\d{2}[\/]\d{2}[\/]\d{2})\1(?<kcal>\d+)\1/gm;
    let exec = pattern.exec(input);
    let totalKcal = 0;
    let productsArr = [];
    
    while(exec) {
        let {name, date, kcal} = exec.groups;

        totalKcal += Number(kcal);
        productsArr.push(`Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`);

        exec = pattern.exec(input);
    }

    let days = Math.floor(totalKcal / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    for (let product of productsArr) {
        console.log(product);
    }
}

adAstra([
'#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);