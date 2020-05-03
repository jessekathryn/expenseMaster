import React from "react";
import { connect } from "react-redux";
import { addActivity } from "../actions/addActivity";

class ActivityInput extends React.Component {
	state = {
		kind: "deposit",
		amount: "",
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addActivity(this.state, this.props.profile.id);
		this.setState({
			kind: "deposit",
			amount: "",
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Type:</label>
					<select
						name="kind"
						value={this.state.kind}
						onChange={this.handleChange}
					>
						<option>deposit</option>
						<option>debit</option>
					</select>
					<label>Amount:</label>
					<input
						type="text"
						name="amount"
						value={this.state.amount}
						onChange={this.handleChange}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default connect(null, { addActivity })(ActivityInput);