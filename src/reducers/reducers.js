var actions = require('../actions/actions.js');

var initialhotColdGame = [];

var hotColdReducer = function(state, action) {
	state = state || initialhotColdGame;
	if(action.type === actions.CREATE_SECRET_NUMBER) {
		//creates multiple instances rather than update it
		// return state.concat({
		// 	secretNumber: action.number
		// });
		return Object.assign({}, state, {
			number: action.number
		});	
	} else if(action.type === actions.fetchUserGuess){
		return state.concat({
				guessNumber: action.guessNumber
		});

	} else if(action.type === actions.getFeedback) {

		return Object.assign({}, state, {
			feedback: action.feedback
		});




	}







	return state;
};

exports.hotColdReducer = hotColdReducer;
exports.initialhotColdGame = initialhotColdGame;