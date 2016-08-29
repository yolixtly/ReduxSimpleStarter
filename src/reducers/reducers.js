var actions = require('../actions/actions.js');

var initialhotColdGame = [
	"Somethin" //5
];

var hotColdReducer = function(state, action) {
	state = state || initialhotColdGame;
	if(action.type === actions.CREATE_SECRET_NUMBER) {
		return state.concat({
			number: action.CREATE_SECRET_NUMBER
		});

		// return Object.assign({}, state, {
		// 	number: action.number
		// });
		
	} 

	return state;
};

exports.hotColdReducer = hotColdReducer;
exports.initialhotColdGame = initialhotColdGame;