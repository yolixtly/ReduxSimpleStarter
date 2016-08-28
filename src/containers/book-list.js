//if we call by a name like React we import the entire library/object
import React, { Component } from 'react';
/*
Tt is a function that forces React to connect with Redux. 
We are pulling a single property of the library
Is like the glue. 
*/
import { connect } from 'react-redux';

//connecting to our action creator
import { selectBook } from '../actions/index';

//function by Redux
import{ bindActionCreators } from 'redux';


//Smart Component because it connects directly to State
class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
		});
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)	
	}
}
/* 
mapStateToProps
Takes our application state into a whatever gets 
return from the props. Returns an Object . The new State
It is available to our this.props
*/
function mapStateToProps(state){
	return {
		//if it renders (application state) 
		//this will automatically re-render
		books : state.books
	};
}

//Anything returned from this function will 
//end up as props o the Booklist container
function mapDispatchToProps(dispatch){
	//Argument 1: action creator that we imported at the top
	//whenever selectBook is called, 
	//the result should be passed to all our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

/*
Promote book from a component to a container
it needs to know abouyt this new dispatch method, selectBook
 Make it available 

Making use of the Connect Function : takes the components states.props and return a container.
State with Component Booklist hooked up

The most generic way to build it : 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList);