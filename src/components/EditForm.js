import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { updateTodo } from "./actions/actionCreators";
import { addTodo } from "./actions/actionCreators";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from "react-bootstrap";
class EditForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoName: "",
			isTodoDone: false,
			todoDescription: "",
			dueDate: new Date()
		};
	}
	onChangeInput = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	onDateChange = date => {
		this.setState({
			dueDate: date
		});
	};
	onChangeRadio = () => {
		this.setState({
			isTodoDone: !this.state.isTodoDone
		});
	};
	onFormSubmit = e => {
		e.preventDefault();
		if (this.props.isNewTodo) {
			this.props.addTodo({
				...this.state,
				dueDate: this.state.dueDate.getTime()
			});
			console.log(this.state);
			this.setState({
				todoName: "",
				isTodoDone: false,
				todoDescription: "",
				dueDate: new Date()
			});
		} else {
			this.props.updateTodo(this.props.todoId, this.state);
			this.props.setModalStatus(false);
		}
	};
	componentDidMount() {
		if (!this.props.isNewTodo) {
			const {
				content: { dueDate, todoName, isTodoDone, todoDescription }
			} = this.props;
			this.setState({
				todoName,
				isTodoDone,
				todoDescription,
				dueDate
			});
		}
	}
	render() {
		return (
			<Form onSubmit={this.onFormSubmit}>
				<Form.Group controlId="todoName">
					<Form.Label>Type in todo's name</Form.Label>
					<Form.Control
						onChange={this.onChangeInput}
						type="text"
						placeholder="Enter name"
						value={this.state.todoName}
					/>
				</Form.Group>
				<DatePicker
					className="form-control date"
					value={this.state.dueDate}
					selected={this.state.dueDate}
					onSelect={this.onDateChange}
				/>
				<Form.Group>
					<Form.Check id="isTodoDone">
						<Form.Check
							inline
							label="Pending"
							type="radio"
							name="status"
							onChange={this.onChangeRadio}
							checked={this.state.isTodoDone === false}
						/>
						<Form.Check
							inline
							label="Done"
							type="radio"
							name="status"
							onChange={this.onChangeRadio}
							checked={this.state.isTodoDone === true}
						/>
					</Form.Check>
				</Form.Group>
				<Form.Group controlId="todoDescription">
					<Form.Label>More details about the todo</Form.Label>
					<Form.Control
						as="textarea"
						rows="3"
						placeholder="describe your todo"
						value={this.state.todoDescription}
						onChange={this.onChangeInput}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}
export default connect(
	null,
	{ addTodo, updateTodo }
)(EditForm);
