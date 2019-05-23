// Borrowed from random-words' source code, by punkave on GitHub
var words = [
    'alpha',
    'bravo',
    'charlie',
    'delta',
    'echo',
    'foxtrot',
    'gulf',
    'hotel',
    'india',
    'juliet',
    'kilo',
    'lima',
    'mike',
    'november',
    'oscar',
    'papa',
    'quebec',
    'romeo',
    'sierra',
    'tango',
    'uniform',
    'victor',
    'whiskey',
    'xray',
    'yankee',
    'zulu',
    'flight',
    'lift',
    'gravity',
    'velocity',
    'airspeed',
    'groundspeed',
    'vector',
    'drag',
    'altitude',
    'gear',
    'flaps',
    'ailerons',
    'elevators',
    'rudder',
    'window',
    'door',
    'fuel'
];

// Set up the variables
// const words = ["hello", "abracadabra", "walrus", "airplane", "russet", "potato", "man", "woman"];
var pickedLetters = [];
var wrongLetters = [];
var word = "";
var wordArray = [];
var guessesLeft = 12;
var wins = 0;

// Start the game
const start = function start() {
    reset();
}

// Game reset
const reset = function reset() {
    wordArray = [];
    pickedLetters = [];
    wrongLetters = [];
    word = pickNewWord();

    guessesLeft = 12;

    for (let i = 0; i < word.length; i++) {
        wordArray.push("_");
    }
    document.getElementById("word").textContent = arrayToString(wordArray);
    document.getElementById("guesses").textContent = "";
    document.getElementById("incorrect").textContent = "";
    document.getElementById("guessesLeft").textContent = guessesLeft;
    document.getElementById("wins").textContent = wins;

}

// Update the text on the page
const update = function update() {
    document.getElementById("guessesLeft").textContent = guessesLeft;
    document.getElementById("guesses").textContent = arrayToString(pickedLetters);
    document.getElementById("incorrect").textContent = arrayToString(wrongLetters);
}

// Pick new word from words list
const pickNewWord = function pickNewWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Update the uderscores
var updateWord = function updateWord(word, underscores, guess) {
    word = word.split("");

    for (let i = 0; i < word.length; i++) {
        if (word[i] == guess) {
            underscores[i] = guess;
        }
    }
    return underscores
}

// Argument: array, returns array as string with spaces seperating characters
var arrayToString = function arrayToString(word) {
    var spaced = "";
    word.forEach(element => {
        spaced = spaced + " " + element;
    });
    return spaced;
}





// Game stuff
document.onkeyup = () => {
    if (guessesLeft < 1) { // Checking for game over
        reset();
    } else {

        const key = event.key;
        if (key.length == 1) { // Checking if input is an individual character
            if (!pickedLetters.includes(key)) pickedLetters.push(key); // If the pickedLetters array does not include the current key, add it
            if (word.includes(key)) { // Checking if the random word includes the guessed letter
                var updatedArray = updateWord(word, wordArray, key);
                document.getElementById("word").textContent = arrayToString(updateWord(word, wordArray, key));
            } else {
                if (!wrongLetters.includes(key)) { // If the guessed letter hasn't been guessed already, proceed
                    wrongLetters.push(key);
                    guessesLeft -= 1;
                }
            }


            // Win condition
            if (!wordArray.includes("_")) {
                wins += 1;
                reset();
            } else update();
        }
    }
}


start();




// Putting dictionary at bottom for a few reasons: 1) so it's not in the way, 2) because ``var`` gets lifted to