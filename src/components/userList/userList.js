import React from 'react';
import BoxView from "../cart/cartBox/boxView/boxView";
import TableView from '../cart/tableView/tableView';
import {Button} from 'react-bootstrap';

const userList = (props) => {

	let users = null;

	if (props.users.length === 0) {
		return users = (
			<div>
				<hr/>
				<h3>User list is empty :(</h3>
				<p>Please create a new user</p>
				<hr/>
			</div>
		)
	}

	if (props.viewAsCart) {
		users = <BoxView userEditHandler={props.userEditHandler} userDeleteHandler={props.userDeleteHandler} users={props.users}/>;
	} else {
		users = <TableView userEditHandler={props.userEditHandler} userDeleteHandler={props.userDeleteHandler} users={props.users}/>;
	}

	return (
		<div className="user-list">
			<hr/>
			<Button onClick={props.changeView}>
				Change view
			</Button>
			<hr/>
			{users}
		</div>
	)

};

export default userList;