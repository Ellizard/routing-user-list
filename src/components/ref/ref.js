import React, {PureComponent} from "react";
import classes from './ref.module.scss';

class Ref extends PureComponent {

	constructor(props) {
		super(props);
		this.refInput = React.createRef();
		this.refCopy = 'Focus to the input'
	}

	inputFocus = () => {

		this.refInput.current.focus();
	};

	render(){

		return(
			<div className={classes.Ref}>
				<h1>React ref</h1>
				<input
					ref={this.refInput}
					type="text"
				/>
				<button
					onClick={this.inputFocus}
				>
					{this.refCopy}
				</button>
			</div>
		)
	}
}

export default Ref;