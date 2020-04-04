import React from 'react'
import { Button, Form } from "react-bootstrap";
import {withRouter} from 'react-router-dom';

const userForm = (props) => {

	let userindex = null;
	let user = {};
	let pageTitle = 'Create a new user';
	let submitValue = 'Create a new user';
	if (props.editUser) {
		userindex = props.match.params.index;
		user = {...props.users[userindex]};

		submitValue = 'Save changes';
		pageTitle = `Edit ${user.name} profile`
	}

	return (
		<div>
			<hr/>
			<h4>{pageTitle}</h4>
			<hr/>
			<Form onSubmit={props.formSubmitHandler}>
				<Form.Group controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder={props.editUser ? user.name : "Enter name"}
						name="name"
						onChange={props.inputChangeHandler}
					/>
					<Form.Text className="text-muted">
						This name will be displaying in user list
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicAge">
					<Form.Label>Age</Form.Label>
					<Form.Control
						type="number"
						placeholder={props.editUser ? user.age : "Enter age"}
						name="age"
						onChange={props.inputChangeHandler}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPosition">
					<Form.Label>Position</Form.Label>
					<Form.Control
						type="text"
						name="position"
						placeholder={props.editUser ? user.position : 'Enter position'}
						onChange={props.inputChangeHandler}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					{submitValue}
				</Button>
			</Form>
		</div>
	)
};

export default withRouter(userForm);