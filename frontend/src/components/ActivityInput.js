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
			  <div class="media p-6">                
				<form onSubmit={this.handleSubmit}>	
					<select className="form-control mb-1"
						name="kind"
						value={this.state.kind}
						onChange={this.handleChange}>
						<option>Deposit</option>
						<option>Debit</option>
					</select>
					<input type="text"
						className="form-control mb-1" 
						name="amount"
						placeholder="$ 00.00"
						value={this.state.amount}
						onChange={this.handleChange}/>
					<input className="btn btn-success" type="submit" value="Confirm" ></input>
				</form>
			</div>
		);
	}
}

export default connect(null, { addActivity })(ActivityInput);
