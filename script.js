function crackPassword() {
    let guess = "";
    let correctPass = document.querySelector("#passwordInput").value;

    guess = recursiveGuesser(guess, correctPass, 4)

    let successMessage = document.querySelector("#successMessage")

    if (!successMessage){
        successMessage = document.createElement("p")
        successMessage.id = "successMessage"
        successMessage.textContent = `Success! Your password is ${guess}`
        document.body.appendChild(successMessage)
    } else {
        successMessage.textContent = `Success! Your password is ${guess}`
    } 
}

function recursiveGuesser(guess, correctPass, repeatNum) {
    let resetLength = guess.length
    for (let i = 0; i < 26; i++) {
        if (guess == correctPass) return guess;
        while (guess.length > resetLength) {
            guess = guess.substring(0, guess.length - 1);
        };
        guess += String.fromCharCode(97 + i);
        if (guess == correctPass) return guess;
        if (repeatNum > 0) {
            guess = recursiveGuesser(guess, correctPass, repeatNum - 1)
        };
    }
    return guess
}