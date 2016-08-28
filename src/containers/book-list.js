//if we call by a name like React we import the entire library/object
import React, { Component } from 'react';
//it is a function that forces React to connect with Redux. We are pulling a single property of the library
import { connect } from 'react-redux';
//Smart Component because it connects directly to State
class BookList extends Compoent {
	renderList() {
		return this.props.books.map(book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			)
		}
	}
	render() {
		// console.log(this.props.asdf); //1 2 3
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
return from the props
*/
function mapStateToProps(state){
	return {
		// asdf : '123'
	}
}