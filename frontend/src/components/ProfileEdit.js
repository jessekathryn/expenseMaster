import React from "react";
import { connect } from "react-redux";
import { editProfile } from "../actions/editProfile";

class ProfileEdit extends React.Component {
	state = {
		name: "",
		balance: "",
		debt: "",
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
			debt: "",
		});
	};

	render() {
		return (
			<div class="media p-6">                
				<form onSubmit={this.handleSubmit}>	
					<input type="text"
						className="form-control mb-1" 
						id="inlineFormInput"
						placeholder="Name"
						value={this.state.name}
						name="name"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						className="form-control mb-1" 
						id="inlineFormInput"
						placeholder="Balance"
						value={this.state.balance}
						name="balance"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						className="form-control mb-1" 
						id="inlineFormInput"
						placeholder="Debt"
						value={this.state.debt}
						name="debt"
						onChange={this.handleChange}
					/>
					<input className="btn btn-success" type="submit" value="Edit" ></input>
				</form>	
			  </div>	
		);
	}
}

ProfileEdit.defaultProps = {
	profiles: {},
};

export default connect(null, { editProfile })(ProfileEdit);
