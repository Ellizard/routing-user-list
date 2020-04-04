import React from 'react'
import {Navbar, Nav, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const header = (props) => {
	return (

		<Navbar bg="light" expand="lg">
			<NavLink exact className="navbar-brand" to="/">User-list</NavLink>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">

					<NavLink exact className="nav-link" to="/">Home</NavLink>
					<NavLink exact className="nav-link" to="/create-new-user">Create new User </NavLink>

					<Button variant="outline-danger"
							onClick={props.switchToAdmin}>
						Admin switch
					</Button>
					<Button variant="outline-secondary"
							onClick={props.openModal}>
						Open Modal Window with Ref
					</Button>
				</Nav>
			</Navbar.Collapse>

		</Navbar>
	)
};

export default header;