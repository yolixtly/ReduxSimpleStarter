import React, { Component } from 'react';

//Dumb component because they dont have direct access to state directly
export default class BookList extends Compoent {
	renderList() {
		return this.props.books.map(book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			)
		}
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)	
	}
}