import React from "react";
import { connect } from "react-redux";
import { addProfile } from "../actions/addProfile";

class ProfileInput extends React.Component {
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
		this.props.addProfile(this.state);
		this.setState({
			name: "",
			balance: "",
			debt: "",
		});
	};

	render() {
		return (
			<div className="media p-6">                
			<form onSubmit={this.handleSubmit}>	
				<input type="text"
					className="form-control mb-1" 
					placeholder="Name"
					value={this.state.name}
					name="name"
					onChange={this.handleChange}
				/>
				<input
					type="text"
					className="form-control mb-1" 
					placeholder="Balance"
					value={this.state.balance}
					name="balance"
					onChange={this.handleChange}
				/>
				<input
					type="text"
					className="form-control mb-1" 
					placeholder="Debt"
					value={this.state.debt}
					name="debt"
					onChange={this.handleChange}
				/>
				<input className="btn btn-success" type="submit" value="Add"></input>
			</form>	
		  </div>
		);
	}
}

export default connect(null, { addProfile })(ProfileInput);
