import React from "react";
import ActivityInput from "../components/ActivityInput";
import Activities from "../components/Activities";

class ActivitiesContainer extends React.Component {
	render() {
		return (
			<div>
				<ActivityInput profile={this.props.profile} />
				<br />
				<Activities
					activities={this.props.profile && this.props.profile.activities}
				/>
			</div>
		);
	}
}

export default ActivitiesContainer;
