import React from 'react';
import CartBox from '../cartBox';

const boxView = (props) => {
	return (
		<div className="row">
			{props.users.map((user, index) => {
				return (
					<CartBox
						key={index}
						name={user.name}
						position={user.position}
						age={user.age}
						index={user.index}
						userEditHandler={() => props.userEditHandler(index)}
						userDeleteHandler={() => props.userDeleteHandler(index)}
					/>
				)
			})}
		</div>

	);
};

export default boxView;
