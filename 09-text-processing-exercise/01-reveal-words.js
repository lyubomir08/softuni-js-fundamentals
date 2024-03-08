function revealWords(wordsStr, text) {
    let words = wordsStr.split(', ');
    
    for (let word of words) {
        let template = '*'.repeat(word.length);
        
        text = text.replace(template, word);
    }

    console.log(text);
}

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages');