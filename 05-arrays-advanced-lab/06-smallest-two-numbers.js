function smallestTwoNums(arr) {
    let smallestTwoNums = arr.sort((a, b) => a - b).slice(0, 2);

    console.log(smallestTwoNums.join(' '));
}

smallestTwoNums([30, 15, 50, 5]);
// smallestTwoNums([3, 0, 10, 4, 7, 3]);