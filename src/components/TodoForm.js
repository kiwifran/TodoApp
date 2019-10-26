import React, { Component } from "react";
import ReactDOM from "react-dom";
import EditForm from "./EditForm";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo } from "./actions/actionCreators";
class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<header>
				<Container className="formContainer">
					<EditForm isNewTodo={true} />
				</Container>
			</header>
		);
	}
}

export default connect(
	null,
	{ addTodo }
)(TodoForm);
