function expenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;

    for (let curLostFight = 1; curLostFight <= lostFights; curLostFight++) {
        if (curLostFight % 2 == 0) {
            expenses += helmetPrice;
        }

        if (curLostFight % 3 == 0) {
            expenses += swordPrice;
        }

        if (curLostFight % 6 == 0) {
            expenses += shieldPrice;
        }

        if (curLostFight % 12 == 0) {
            expenses += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

expenses(7, 2, 3, 4, 5);
// expenses(23, 12.50, 21.50, 40, 200);