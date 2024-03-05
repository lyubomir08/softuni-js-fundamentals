function censoredWords(text, word) {
    let censored = text.replace(word, repeat(word));
    
    while(censored.includes(word)) {
        censored = censored.replace(word, repeat(word));
    }

    console.log(censored);
    
    function repeat(word) {
        let stars = '*'.repeat(word.length);
        return stars;
    }
}

censoredWords('A small sentence with some words', 'small');