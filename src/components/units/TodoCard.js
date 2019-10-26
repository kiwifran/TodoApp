import React, { Component } from "react";
import EditForm from "./EditForm";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/actionCreators";
import { Container, Card, Button, Modal } from "react-bootstrap";
class TodoCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
		};
	}
	setModalStatus = val => {
		this.setState({ isModalOpen: val });
	};
	render() {
		const {
			content,
			content: { dueDate, todoName, isTodoDone, todoDescription },
			todoId
		} = this.props;
		const date = new Date(dueDate);
		const dateString = date.toDateString();
		return (
			<div
				className={`${
					isTodoDone ? "order-2" : "order-0"
				} col-9 col-md-6 col-lg-4 col-xl-3 mb-3`}
			>
				<Card border={isTodoDone ? "success" : "warning"}>
					<Card.Header
						className={isTodoDone ? "finished" : "unfinished"}
					>
						{isTodoDone
							? `Done: ${dateString}`
							: `Pending: ${dateString}`}
					</Card.Header>
					<Card.Body>
						<Card.Title>{todoName}</Card.Title>
						<Card.Text>{todoDescription}</Card.Text>
						<Button
							variant="info"
							size="sm"
							className="mr-2"
							onClick={() => this.setModalStatus(true)}
						>
							Edit
						</Button>
						<Button
							variant="danger"
							size="sm"
							onClick={() => this.props.deleteTodo(todoId)}
						>
							Delete
						</Button>
					</Card.Body>
				</Card>
				<Modal
					show={this.state.isModalOpen}
					onHide={() => this.setModalStatus(false)}
					dialogClassName="modal-90w"
				>
					<Modal.Header closeButton>
						<Modal.Title>Edit the to do</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container>
							<EditForm
								isNewTodo={false}
								content={content}
								todoId={todoId}
								setModalStatus={this.setModalStatus}
							/>
						</Container>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}
export default connect(
	null,
	{ deleteTodo }
)(TodoCard);
