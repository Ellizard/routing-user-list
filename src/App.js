import React, { PureComponent} from 'react';
import classes from './App.module.scss';
import {Button} from "react-bootstrap";
import Modal from './components/modal/modal';
import Ref from "./components/ref/ref";
import Header from './components/header/header';
import UserList from './components/userList/userList';
import UserForm from './components/userForm/userForm';
import {Route, withRouter} from 'react-router-dom';
import AdminPage from './hoc/adminPage';
import AdminFlow from './components/adminFlow/adminFlow';

class App extends PureComponent {
	state = {
		isAdmin: null,
		isModalOpen: false,
		viewAsCart: true,
		inputValues: {},
		users: [
			{
				name: 'Artem',
				position: 'FE',
				age: 26,
			},
			{
				name: 'Taras',
				position: 'BE',
				age: 261,
			}
		],
	};

	// Toggle modal window.
	switchModalHandler = () => {
		const isModalOpen = this.state.isModalOpen;
		this.setState({
			isModalOpen: !isModalOpen
		})
	};

	// Check and toggle localstorage with content.
	switchToAdmin = () => {
		const isAdmin = this.state.isAdmin;
		if (localStorage.isAdmin === null || localStorage.isAdmin === "false") {
			localStorage.isAdmin = true;
			this.setState({
				isAdmin: !isAdmin
			})
		} else {
			localStorage.isAdmin = false;
			this.setState({
				isAdmin: !isAdmin
			})
		}
	};

	// Change input handler.
	inputChangeHandler = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		const inputValues = this.state.inputValues;

		inputValues[name] = value;

		this.setState({
			inputValues:inputValues
		});
	};

	// Create user.
	createUserHandler = (event) => {
		event.preventDefault();
		const userData = {
			name: this.state.inputValues.name,
			age: +this.state.inputValues.age,
			position: this.state.inputValues.position,
		};
		const users = [...this.state.users];

		// Check for empty fields.
		if (
			userData.name === undefined ||
			userData.age === undefined ||
			userData.position === undefined
		) {
			// Show error message, reset user form date and redirect.
			alert('You should fill all fields');
			this.setState({
				inputValues: {}
			});
			this.props.history.push('/');
		} else {
			// Add new user and redirect to HP.
			users.push(userData);
			this.setState({
				users:users
			});
			this.props.history.push('/');
		}
	};

	// Update user info.
	saveUserChangesHandler = (event) => {
		event.preventDefault();

		// Get current user id from location url.
		const userID = this.props.location.pathname.replace( /^\D+/g, '');
		const users = [...this.state.users];

		users[userID].name = this.state.inputValues.name;
		users[userID].age = +this.state.inputValues.age;
		users[userID].position = this.state.inputValues.position;

		// Update state.
		this.setState({
			inputValues: {},
			users:users
		});

		this.props.history.push('/');
	};

	// Change view.
	changeView = () => {
		const viewAsCart = this.state.viewAsCart;
		this.setState({
			viewAsCart: !viewAsCart
		})
	};

	// Remove user.
	userDeleteHandler = (index) => {
		const users = [...this.state.users];
		users.splice(index, 1);
		this.setState({
			users: users
		})
	};

	userEditHandler = (index) => {
		this.props.history.push(`/edit-user/${index}`);
		const currentUser = {...this.state.users[index]};
		this.setState({
			inputValues:currentUser
		});
	};

	modal = () => {
		if (this.state.isModalOpen)	{
			return (
				<Modal>
					<div className={classes.Modal}>
						<div onClick={this.switchModalHandler} className={classes.Overlay}></div>
						<div className={classes.ModalContainer}>
							<Ref/>
							<Button
								className={classes.CloseModal}
								onClick={this.switchModalHandler}>
								Close modal
							</Button>
						</div>
					</div>
				</Modal>
			)
		}
		else {
			return null
		}
	};

	render(props) {

		const modal = this.modal();

		let isAdmin = (
			<AdminPage>
				<AdminFlow />
			</AdminPage>
		);

		return (
			<div className="container">
				{modal}
				<Header
					switchToAdmin={this.switchToAdmin}
					openModal={this.switchModalHandler}
				/>

				{this.state.isAdmin ? isAdmin : null}
				<Route path="/" exact render={ () => {
					return (
						<UserList
							userEditHandler={this.userEditHandler}
							userDeleteHandler={this.userDeleteHandler}
							viewAsCart={this.state.viewAsCart}
							changeView={this.changeView}
							users={this.state.users} />
						)
				} }/>

				<Route path="/create-new-user"  render={ () => {
					return (
						<UserForm
							userEditHandler={this.userEditHandler}
							inputChangeHandler={this.inputChangeHandler}
							formSubmitHandler={this.createUserHandler}
						/>
					)
				}}/>

				<Route path="/edit-user/:index"  render={ () => {
					return (
						<UserForm
							editUser={true}
							users={this.state.users}
							inputChangeHandler={this.inputChangeHandler}
							formSubmitHandler={this.saveUserChangesHandler}
						/>
					)
				}}/>

			</div>
		)
	}

}

export default withRouter(App);
