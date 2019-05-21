// Setup the word list to chose from
const words = ["hello", "abracadabra", "walrus", "airplane", "russet", "potato", "man", "woman"]

// Pick new word from words list
const pickNewWord = function pickNewWord () {
    return words[Math.floor(Math.random() * words.length)];
}


const game = function game () {
    const word = pickNewWord();

}


document.onkeyup = () => {
    const key = event.key;

}


document.getElementById("start").onclick = () => {
    console.log(event);
}
game();