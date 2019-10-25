import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "./actions/actionCreators";
import { Container } from "react-bootstrap";

import TodoCard from "./TodoCard";
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	renderTodoCard = todosData => {
		const list = [];
		for (let key in todosData) {
			list.push([key, todosData[key]]);
		}
		console.log(list);
		return list.map(item => (
			<TodoCard key={item[0]} content={item[1]} todoId={item[0]} />
		));
	};
	componentDidMount() {
		this.props.fetchTodos();
	}
	// UNSAFE_componentWillMount() {
	// 	this.props.fetchTodos();
	// }
	componentDidUpdate(prevProps, prevState) {}
	render() {
		return (
			<div>
				<hr />
				<div className="row justify-content-center justify-content-md-between flex-wrap p-3">
					{this.renderTodoCard(this.props.store)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		store
	};
};
export default connect(
	mapStateToProps,
	{ fetchTodos }
)(TodoList);
