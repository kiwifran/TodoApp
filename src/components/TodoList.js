import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "./actions/actionCreators";
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.fetchTodos();
	}
	componentDidUpdate(prevProps, prevState) {}
	render() {
		return (
			<div>
				<h2>the todo list comes here </h2>
				{/* {this.props.store.map(item => {
					return <li>{item.todoName}</li>;
				})} */}
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
