//State argument is not an application state, only the state
// this reducer is responsible for: 
//called whenever an action is dispatch 
export default function(state = null, action) {
	
	//Case: we care about the action 
	//
	switch(action.type){
		case 'BOOK_SELECTED':
		//we always want to return a new fresh state.
		//Inmmutability for state
			return action.payload;
	}

	//base Case: if we dont care about the action
	return state


}