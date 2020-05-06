import React from "react";
import { connect } from "react-redux";
import { addProfile } from "../actions/addProfile";

class ProfileInput extends React.Component {
	state = {
		name: "",
		balance: "",
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addProfile(this.state);
		this.setState({
			name: "",
			balance: "",
		});
	};

	render() {
		return (
			<div>
				<h4>$ New Profile</h4>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Name"
						value={this.state.name}
						name="name"
						onChange={this.handleChange}
					/>
					<br />
					<input
						type="text"
						placeholder="Starting Balance"
						value={this.state.balance}
						name="balance"
						onChange={this.handleChange}
					/>
					<br />
					<input type="submit" name="Add" />
				</form>
			</div>
		);
	}
}

export default connect(null, { addProfile })(ProfileInput);
