import React, { Component } from "react";
import EditForm from "../units/EditForm";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "react-bootstrap";
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
export default TodoForm;
