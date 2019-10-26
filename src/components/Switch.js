import React, { Component } from "react";
import Switch from "react-switch";

class ListSwitch extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="switch">
				<label htmlFor="material-switch">
					<span>Only see pending todos</span>
					<Switch
						onChange={this.props.handleSwitch}
						checked={this.props.isChecked}
						handleDiameter={30}
						uncheckedIcon={false}
						boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
						activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
						height={20}
						width={48}
						id="material-switch"
					/>
				</label>
			</div>
		);
	}
}
export default ListSwitch;
