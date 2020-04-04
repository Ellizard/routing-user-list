import React from 'react';
import {Alert} from "react-bootstrap";

const adminFlow = () => {
	return (
		<div>
			<hr/>
			<Alert variant="success" className="text-center">
				Congrats, You are admin now!
			</Alert>
		</div>
	);
};

export default adminFlow;