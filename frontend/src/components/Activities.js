import React from "react";
import { connect } from "react-redux";
import { deleteActivity } from "../actions/deleteActivity";

class Activities extends React.Component {
	state = {};

	handleDelete = (activity) => {
		this.props.deleteActivity(activity.id, activity.profile_id);
	};

	visit = (id) => {
		this.state[id]
			? this.setState({ [id]: (this.state[id] += 1) })
			: this.setState({ [id]: 1 });
	};

	render() {
		return (
			<div>
				{this.props.activities &&
					this.props.activities.map((activity) => (
						<div key={activity.id}>
							${activity.amount}0 | {activity.kind.toUpperCase()} | {activity.date} <br></br>
							<button className="btn btn-primary" onClick={() => this.visit(activity.id)}>
							Like {this.state[activity.id] ? this.state[activity.id] : 0}
							</button>
							<button className="btn btn-danger" onClick={() => this.handleDelete(activity)}>
							Delete
							</button>
						</div>
					))}
			</div>
		);
	}
}

export default connect(null, { deleteActivity })(Activities);
