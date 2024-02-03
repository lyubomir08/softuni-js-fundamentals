function passwordValidator(pass) {
    let isLengthValid = checkLength(pass);
    let isOnlyLettersDigits = checkOnlyLettersDigits(pass);
    let isMinTwoDigits = checkMinTwoDigits(pass);

    if (isLengthValid && isOnlyLettersDigits && isMinTwoDigits) {
        console.log("Password is valid");
    }

    function checkLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkOnlyLettersDigits(pass) {
        for (let char of pass) {
            let code = char.charCodeAt(0);

            if (!((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }

        return true;
    }

    function checkMinTwoDigits(pass) {
        let digits = 0;

        for (let char of pass) {
            let code = char.charCodeAt(0);

            if (code >= 48 && code <= 57) {
                digits++;
            }
        }

        if (digits > 2) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }
}

passwordValidator('logIn');
// passwordValidator('MyPass123');