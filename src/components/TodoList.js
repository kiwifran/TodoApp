import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "./actions/actionCreators";
import TodoCard from "./TodoCard";
import ListSwitch from "./Switch";
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChecked: false
		};
	}
	renderTodoCard = todosData => {
		const list = [];
		for (let key in todosData) {
			list.push([key, todosData[key]]);
		}
		console.log(list);
		if (this.state.isChecked) {
			return list
				.filter(item => item[1].isTodoDone === false)
				.map(item => (
					<TodoCard
						key={item[0]}
						content={item[1]}
						todoId={item[0]}
					/>
				));
		} else {
			return list.map(item => (
				<TodoCard key={item[0]} content={item[1]} todoId={item[0]} />
			));
		}
	};
	handleSwitch = () => {
		this.setState({
			isChecked: !this.state.isChecked
		});
	};
	componentDidMount() {
		this.props.fetchTodos();
	}
	componentDidUpdate(prevProps, prevState) {}
	render() {
		return (
			<div>
				<hr />
				<ListSwitch
					isChecked={this.state.isChecked}
					handleSwitch={this.handleSwitch}
				/>
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
