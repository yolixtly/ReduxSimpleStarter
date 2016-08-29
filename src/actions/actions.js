/*CONSTANT VARIABLES */
var CREATE_SECRET_NUMBER = 'CREATE_SECRET_NUMBER';
var FETCH_USER_NUMBER = 'FETCH_USER_NUMBER';
var GET_FEEDBACK = 'GET_FEEDBACK';
var TRACK_PASS_GUESSES = 'TRACK_PASS_GUESSES';
var RENDER_GUESS_LIST = 'RENDER_GUESS_LIST';
var RESET_APP = 'RESET_APP';
/* 
Actions to be perfomed during the game : 
*/

// Generate a secret number

var createSecretNumber = function(){
var randomNumber = Math.floor((Math.random() * 100) + 1);
	return {
		// console.log('is working!');
		type: CREATE_SECRET_NUMBER,
		number: randomNumber

	}
};

// On Guess/onClick: Compare the guess vs the secret number

var fetchUserGuess = function(guessNumber){
	return {
		type: FETCH_USER_NUMBER,
		userGuess: guessNumber
	}
};

// Get Feedback action
var getFeedback = function(guessNumber, secretNumber, feedback){
	return {
		type: GET_FEEDBACK,
		userGuess: guessNumber,
		secretNumber: secretNumber,
		feedback: feedback
	}

};

// Track number of guesses. Counter Number after every guess

var trackPastGuesses = function(count){
	return {
		type: TRACK_PASS_GUESSES,
		guessCount: count
	}
};

// Render the past uses Guesses. 

var guessesHistory = function(newGuess){
	return {
		type: RENDER_GUESS_LIST,
		description: newGuess
	}
};

//Start a newGame  ???

var startNewGame = function(count, pastGuesses){
	return {
		type: 'RESET_APP',
		guessCount: count,
		Initialfeedback: 'Make your Guess!'

	}
};

exports.CREATE_SECRET_NUMBER = CREATE_SECRET_NUMBER;
exports.createSecretNumber = createSecretNumber;
exports.FETCH_USER_NUMBER = FETCH_USER_NUMBER;
exports.fetchUserGuess = fetchUserGuess;
exports.GET_FEEDBACK = GET_FEEDBACK;
exports.getFeedback = getFeedback;
exports.TRACK_PASS_GUESSES = TRACK_PASS_GUESSES;
exports.trackPastGuesses = trackPastGuesses;
exports.RENDER_GUESS_LIST = RENDER_GUESS_LIST;
exports.guessesHistory = guessesHistory;
exports.RESET_APP = RESET_APP;
exports.startNewGame = startNewGame;



