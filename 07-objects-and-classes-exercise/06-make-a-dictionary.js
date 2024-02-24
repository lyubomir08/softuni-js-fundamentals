function solve(arr = []) {
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        let el = JSON.parse(arr[i]);

        let objName = Object.getOwnPropertyNames(el);
        let values = Object.values(el);
        console.log(`Term: ${objName} => Definition: ${values}`);
    }
}

solve();