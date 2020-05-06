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
						<li key={activity.id}>
							{activity.date} - {activity.kind} - {activity.amount}{" "}
							<button onClick={() => this.visit(activity.id)}>
								Likes {this.state[activity.id] ? this.state[activity.id] : 0}
							</button>
							<button onClick={() => this.handleDelete(activity)}>
								Delete
							</button>
						</li>
					))}
			</div>
		);
	}
}

export default connect(null, { deleteActivity })(Activities);
