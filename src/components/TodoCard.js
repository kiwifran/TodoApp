import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "./actions/actionCreators";
import { Card, Button } from "react-bootstrap";

class TodoCard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const {
			content: { dueDate, todoName, isTodoDone, todoDescription },

			todoId
		} = this.props;
		return (
			<div
				className={
					isTodoDone
						? "order-5 col-9 col-md-6 col-lg-4 col-xl-3 mb-3"
						: "order-0 col-9 col-md-6 col-lg-4 col-xl-3 mb-3"
				}
			>
				<Card border={isTodoDone ? "success" : "warning"}>
					<Card.Header
						className={isTodoDone ? "finished" : "unfinished"}
					>
						{isTodoDone ? `Done: ${dueDate}` : `Due: ${dueDate}`}
					</Card.Header>
					<Card.Body>
						<Card.Title>{todoName}</Card.Title>
						<Card.Text>{todoDescription}</Card.Text>
						<Button variant="info" size="sm" className="mr-2">
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
			</div>
		);
	}
}
export default connect(
	null,
	{ deleteTodo }
)(TodoCard);
