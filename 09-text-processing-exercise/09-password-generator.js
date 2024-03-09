function passwordGenerator(arr) {
    let concatenatedWords = arr[0] + arr[1];
    let replacementWord = arr[2];

    let vowels = ['a', 'e', 'o', 'u', 'i'];
    let idx = 0;

    for (let char of concatenatedWords) {
        if (vowels.includes(char)) {
            concatenatedWords = concatenatedWords.replace(char, replacementWord[idx].toUpperCase());
            idx++;

            if (idx ==  replacementWord.length) {
                idx = 0;
            }
        }
    }
    concatenatedWords = concatenatedWords.split('').reverse().join('');

    console.log(concatenatedWords);
}

passwordGenerator([
    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'
]);