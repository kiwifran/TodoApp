import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {}
	componentDidUpdate(prevProps, prevState) {}
	render() {
		return <h2>the todo list comes here {this.props.todoList[0]}</h2>;
	}
}

const mapStateToProps = store => {
	const { todoList } = store;
	return {
		todoList
	};
};
export default connect(mapStateToProps)(TodoList);
