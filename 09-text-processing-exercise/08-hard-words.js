function hardWords(arr) {
    let text = arr[0];
    let words = arr[1];

    words.sort((a, b) => b.length - a.length);

    for (let word of words) {
        let template = '_'.repeat(word.length);
        text = text.replace(template, word);
    }

    console.log(text);
}

hardWords();