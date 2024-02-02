function palindromeInts(arr) {
    for (let num of arr) {
        let isPalindrome = checkIsPalindrome(num);
        console.log(isPalindrome);
    }

    function checkIsPalindrome(num) {
        let numStr = String(num);
        let reversedResult = '';

        for (let i = numStr.length - 1; i >= 0; i--) {
            let curNumStr =  numStr[i];
            reversedResult +=  curNumStr;
        }

        let isPalindrome =  reversedResult === numStr;
        return isPalindrome;
    }
}

palindromeInts([123,323,421,121]);
// palindromeInts([32,2,232,1010]);