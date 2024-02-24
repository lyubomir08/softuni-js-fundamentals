function inventory(arr) {
    let heroes = [];

    for (let heroInfo of arr) {
        let [name, level, items] =  heroInfo.split(" / ");
        level = Number(level);
        let heroObj = { name: name, level: level, items: items };
        heroes.push(heroObj);
    }

    let sortedHeroes =  heroes.sort((a, b) => a.level - b.level);

    for (let hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 
'Hes / 1 / Desolator, Sentinel, Antara']);