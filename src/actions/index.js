//single action creator 
//export it to be access in other files
//we are going to bind this action into the booklist the container in touch with the state 
export function selectBook(book){
	console.log(book.title, 'Book has been selected');
};
