function wordsTracker(arr) {
    let searchedWords = arr.shift().split(' ');
    let wordsTracker = {};

    for (let searchedWord of searchedWords) {
        wordsTracker[searchedWord] = 0;
    }

    for (let word of arr) {
        if (word in wordsTracker) {
            wordsTracker[word]++;
        }
    }

    let sorted = Object.entries(wordsTracker).sort((a, b) =>  b[1] - a[1]);

    for (let [word, num] of sorted) {
        console.log(`${word} - ${num}`);
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task']);