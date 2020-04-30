import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchProfiles } from "../actions/fetchProfiles";
import Profiles from "../components/Profiles";
import Profile from "../components/Profile";
import ProfileInput from "../components/ProfileInput";
import NavBar from "../components/NavBar";

class ProfilesContainer extends React.Component {
	componentDidMount() {
		this.props.fetchProfiles();
	}

	render() {
		return (
			<div>
				<NavBar />
				<Switch>
					<Route path="/profiles/new" component={ProfileInput} />
					<Route
						path="/profiles/:id"
						render={(routerProps) => (
							<Profile {...routerProps} profiles={this.props.profiles} />
						)}
					/>
					<Route
						path="/profiles"
						render={(routerProps) => (
							<Profiles {...routerProps} profiles={this.props.profiles} />
						)}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profiles: state.profiles,
	};
};

export default connect(mapStateToProps, { fetchProfiles })(ProfilesContainer);
