function searchForNumber(nums, threeNums) {
    let [takeElements, deleteElements, searchedNumber] = threeNums;

    let takenElements = nums.splice(0, takeElements);
    takenElements.splice(0, deleteElements);

    let count = 0;

    for (let num of takenElements) {
        if (num == searchedNumber) {
            count++;
        }
    }
    

    console.log(`Number ${searchedNumber} occurs ${count} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
// searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);