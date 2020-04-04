import React from 'react';
import PropTypes from 'prop-types';

const cartBox = (props) => {
	return (
		<div className="col-md-3">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						<strong>position: </strong>
						{props.position}
					</p>
					<p className="card-text">
						<strong>age: </strong>
						{props.age}
					</p>
					<button
						className="btn btn-primary"
						onClick={() => props.userEditHandler(props.index)}
					>
						Edit
					</button>
					<button
						className="btn btn-danger"
						onClick={ () => props.userDeleteHandler(props.index)}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

cartBox.propTypes = {
	name: PropTypes.string,
	position: PropTypes.string,
	age: PropTypes.number,
	index: PropTypes.number,
	userEditHandler: PropTypes.func,
	userDeleteHandler: PropTypes.func,
};


export default cartBox;