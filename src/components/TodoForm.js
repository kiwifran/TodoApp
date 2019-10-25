import React, { Component } from "react";
import ReactDOM from "react-dom";
import EditForm from "./EditForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo } from "./actions/actionCreators";
class TodoForm extends Component {
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
		this.props.addTodo({
			...this.state,
			dueDate: this.state.dueDate.toDateString()
		});
		console.log(this.state);
		this.setState({
			todoName: "",
			isTodoDone: false,
			todoDescription: "",
			dueDate: new Date()
		});
		//for some unknown reasons the reference to the form only controls the textarea, while the value of textarea changes the dom node won't change as the other inputs do, so clear them separately

		ReactDOM.findDOMNode(this.formRef).reset();
	};
	componentDidMount() {}
	componentDidUpdate(prevProps, prevState) {}
	render() {
		return (
			<header>
				<Container className="formContainer">
					{/* <Form
						onSubmit={this.onFormSubmit}
						ref={form => (this.formRef = form)}
					>
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
								value={this.todoDescription}
								onChange={this.onChangeInput}
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form> */}
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