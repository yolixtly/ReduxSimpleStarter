var actions = require('../actions/actions.js');

var initialhotColdGame = [
	"Somethin" //5
];

var hotColdReducer = function(state, action) {
	state = state || initialhotColdGame;
	console.log(action.type);
	console.log(actions.CREATE_SECRET_NUMBER);
	if(action.type === actions.CREATE_SECRET_NUMBER) {
		console.log("inside ");
		return Object.assign({}, state, {
			number: 'This works FYeah!'
		});
		
	} else {
		console.log("else");
	}


console.log("outside");
	return state;
};

exports.hotColdReducer = hotColdReducer;
exports.initialhotColdGame = initialhotColdGame;