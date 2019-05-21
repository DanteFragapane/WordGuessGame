// Set up the variables
const words = ["hello", "abracadabra", "walrus", "airplane", "russet", "potato", "man", "woman"];
var pickedLetters = [];
var wrongLetters = [];
var word = "";
var guesses = 12;




// Pick new word from words list
const pickNewWord = function pickNewWord() {
    return words[Math.floor(Math.random() * words.length)];
}


document.onkeyup = () => {
    if (guesses < 1) {
        document.getElementById("status").textContent = "Game over.";
    } else {
        const key = event.key;
        if (key.length == 1) { // Checking if input is an individual character
            if (!pickedLetters.includes(key)) pickedLetters.push(key); // If the pickedLetters array does not include the current key, add it
            if (word.includes(key)) { // Checking if the random word includes the guessed letter
                console.log("Yup!");
            } else {
                if (!wrongLetters.includes(key)) { // If the guessed letter hasn't been guessed already, proceed
                    wrongLetters.push(key);
                    guesses -= 1;
                }
            }

            console.log("----------");
            console.log(wrongLetters);

            document.getElementById("guesses").textContent = guesses;
        }
    }
}
// // Button click!
// document.getElementById("start").onclick = () => {
// }


word = pickNewWord();