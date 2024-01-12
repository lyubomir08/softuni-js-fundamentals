function login(input) {
    let username = input[0];
    let pass = '';

    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];
    }
    
    let guess = input[1];
    let index = 2;

    let wrongAttemps = 0;

    while(guess != pass) {
        wrongAttemps++;

        if (wrongAttemps == 4) {
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log("Incorrect password. Try again.");

        guess = input[index];
        index++;
    }
    console.log(`User ${username} logged in.`);
}

login(['Acer','login','go','let me in','recA']);
// login(['sunny','rainy','cloudy','sunny','not sunny']);
// console.log(['momo','omom']);