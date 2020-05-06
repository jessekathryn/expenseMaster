import React from "react";
import { connect } from "react-redux";
import { editProfile } from "../actions/editProfile";

class ProfileEdit extends React.Component {
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
		let profile = { ...this.state, id: this.props.profile.id };
		this.props.editProfile(profile);
		this.setState({
			name: "",
			balance: "",
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text"
						class="form-control mb-2" 
						id="inlineFormInput"
						placeholder="Name"
						value={this.state.name}
						name="name"
						onChange={this.handleChange}
					/><input class="btn btn-success" type="submit" value="Edit" ></input>
					{/* <input
						type="text"
						placeholder="Starting Balance"
						value={this.state.balance}
						name="balance"
						onChange={this.handleChange}
					/> */}
				</form>
			</div>
		);
	}
}

ProfileEdit.defaultProps = {
	profiles: {},
};

export default connect(null, { editProfile })(ProfileEdit);
