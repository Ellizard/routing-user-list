import React from 'react';
import PropTypes from 'prop-types';

const cartRow = (props) => {
	return (
		<tr>
			<th scope="row">{props.index + 1}</th>
			<td>{props.name}</td>
			<td>{props.position}</td>
			<td>{props.age}</td>
			<td>
				<button
					className="btn btn-primary btn-sm"
					onClick={() => props.userEditHandler(props.index)}
				>
					Edit
				</button>
				<button
					className="btn btn-danger btn-sm"
					onClick={ () => props.userDeleteHandler(props.index)}
				>
					Delete
				</button>
			</td>
		</tr>
	)
};

cartRow.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	position: PropTypes.string,
	userDeleteHandler: PropTypes.func,
	userEditHandler: PropTypes.func,
};

export default cartRow;