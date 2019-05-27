// Borrowed from random-words' source code, by punkave on GitHub
const words = [
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
    'flap',
    'aileron',
    'elevator',
    'rudder',
    'window',
    'door',
    'fuel',
    'lavatory',
    'runway',
    'taxiway',
    'tower',
    'gate',
    'terminal',
    'concourse',
    'stand',
    'airspace',
    'mode',
    'altimeter',
    'ndb',
    'rnav',
    'lnav',
    'transponder',
    'restricted',
    'friction',
    'threshold'
];

// Set up the variables
var pickedLetters = [];
var wrongLetters = [];
var word = "";
var wordArray = [];
var guessesLeft = 12;
var wins = 0;
var previousWord = "";

// Start the game
const start = function start() {
    reset();
};

// Game reset
const reset = function reset() {
    wordArray = [];
    pickedLetters = [];
    wrongLetters = [];
    previousWord = word;
    word = pickNewWord();

    guessesLeft = 12;

    for (let i = 0; i < word.length; i++) {
        wordArray.push("_");
    }
    document.getElementById("startText").textContent = "Press any lowercase letter to start!";
    document.getElementById("word").textContent = arrayToString(wordArray);
    document.getElementById("guesses").textContent = "";
    document.getElementById("incorrect").textContent = "";
    document.getElementById("guessesLeft").textContent = guessesLeft;
    document.getElementById("wins").textContent = wins;
    document.getElementById("previous").textContent = previousWord;
};

// Update the text on the page
const update = function update() {
    document.getElementById("guessesLeft").textContent = guessesLeft;
    document.getElementById("guesses").textContent = arrayToString(pickedLetters);
    document.getElementById("incorrect").textContent = arrayToString(wrongLetters);
    document.getElementById("startText").textContent = "";
};

// Pick new word from words list
const pickNewWord = function pickNewWord() {
    return words[Math.floor(Math.random() * words.length)];
};

// Update the uderscores array
const updateWord = function updateWord(word, underscores, guess) {
    word = word.split("");

    for (let i = 0; i < word.length; i++) {
        if (word[i] == guess) {
            underscores[i] = guess;
        }
    }
    return underscores;
};

// Argument: array, returns array as string with spaces seperating characters
const arrayToString = function arrayToString(word) {
    var spaced = "";
    word.forEach(element => {
        spaced = spaced + " " + element;
    });
    return spaced;
};


// Game stuff
document.onkeyup = () => {
    if (guessesLeft < 1) { // Checking for game over
        reset();
    } else {

        const key = event.key;
        if (key.length == 1 && key.match(/[a-z]/g)) { // Checking if input is an individual character, and is a letter
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
            } else {
                update();
            }
        }
    }
};


start();