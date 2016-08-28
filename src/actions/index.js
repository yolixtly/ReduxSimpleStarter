//single action creator 
//export it to be access in other files
//we are going to bind this action into the booklist the container in touch with the state 
export function selectBook(book){
	// console.info(book.title, 'Book has been selected');
	//Actions (controller) returns an object with a type property, an action.
	return {
		//The type of action.Usually is a variable that holds this string
		//always UPPERCASE. Usually these actions are saved in a separate folder
		type: 'BOOK_SELECTED', 
		//sometimes: further describes the purpose of the action
		payload:  book
	};
};
