function shoppingList(arr) {
    let list = arr.shift().split('!');
    let command = arr.shift();

    while (command != 'Go Shopping!') {
        let tokens = command.split(' ');
        let action = tokens[0];
        
        if (action == 'Urgent') {
            let item = tokens[1];

            if (!list.includes(item)) {
                list.unshift(item);
            }
        } else if (action == 'Unnecessary') {
            let item = tokens[1];

            if (list.includes(item)) {
                let index = list.indexOf(item);
                list.splice(index, 1);
            }
        } else if (action == 'Correct') {
            let oldItem = tokens[1];
            let newItem = tokens[2];

            if (list.includes(oldItem)) {
                let index = list.indexOf(oldItem);
                list.splice(index, 1, newItem);
            }
        } else if (action == 'Rearrange') {
            let item = tokens[1];

            if (list.includes(item)) {
                let index = list.indexOf(item);
                let replacedItem = list.splice(index, 1).shift();
                list.push(replacedItem);
            }
        }

        command = arr.shift();
    }

    console.log(list.join(', '));
}

shoppingList((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]));
// shoppingList((["Milk!Pepper!Salt!Water!Banana",
// "Urgent Salt",
// "Unnecessary Grapes",
// "Correct Pepper Onion",
// "Rearrange Grapes",
// "Correct Tomatoes Potatoes",
// "Go Shopping!"]));