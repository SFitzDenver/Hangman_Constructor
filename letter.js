var wordsToPick = ["gladiator", "titanic", "ratatouille", "cars", "jumanji", "fargo", "casablanca", "airplane", "hairspray", "rango"];

var letters = [];
var currentWord = wordsToPick[Math.floor(Math.random() * wordsToPick.length)];
letters = currentWord.split("");
var lettersGuessed = [];
var matchedLetters = [];
var guess = process.argv[2];
console.log(letters);
console.log("first letter: " + letters[0]);

console.log("current word: " + currentWord);
console.log("current word length: " + currentWord.length);


var Letter = function(character, guess) {
	
		this.character = [];
		this.guessYet = false;
		console.log("character 2: " + character);
		console.log("guess: " + guess);

		this.wordDisplay = function() {
			// if(this.guess == true) {
			// 	lettersGuessed.push(this.guess);
			// 	console.log(lettersGuessed);
			// }
			var wordView = "";
			for (i = 0; i < letters.lenth; i++) {

				if(lettersGuessed.indexOf(letters) == -1)  {
				return wordView += this.letters[i];
				} else {
				return wordView += "&nbsp;_&nbsp;";
				}
				console.log("sherry");
			};
		};


		this.check = function() {
				if((guess === this.letters) && (this.matchedLetters.indexOf(guess) === -1)) {
					this.matchedLetters.push(guess);
					this.lettersGuessed.push(guess);
					console.log(matchedLetters);
				// } else {
				// 	this.lettersGuessed.push(guess);
				// }
		};
		}
	

for (i = 0; i < currentWord.length; i++) {
	character = letters[i];
	var newLetter = new Letter(character, guess);
	newLetter.wordDisplay();
	newLetter.check();
	console.log("character 1: " + character);
};

// this.newLetter = function(character, guess) {

// var newLetter = new Letter(character, guess);

// newLetter.wordDisplay(letters[0], process.argv[2]);

// };






// var letter = function() {
// 	for (i = 0; i < currentWord.length; i++) {
// 		this.character = [];
// 		cosole.log[this.character];
// 	}
// 	this.uCharacter = [];
// 	this.gCharacter = false;

// 	this.uCharacterReturn = function() {
// 		if (this.uCharacter === this.gCharacter) {
// 			this.gCharacter = true;

// 		}
// 	}
// }

