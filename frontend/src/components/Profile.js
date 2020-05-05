import React from "react";
import ProfileEdit from "./ProfileEdit";
import ActivitiesContainer from "../containers/ActivitiesContainer";

const Profile = (props) => {
	let profile = props.profiles.filter(
		(profile) => profile.id == props.match.params.id
	)[0];
	console.log(profile);
	return (
		<div>
			<h2>
	
			{profile ? profile.name : null} - {profile ? profile.balance : null}
			</h2>
			<ActivitiesContainer profile={profile} />
			<br />
			<h4>Edit</h4>
			<ProfileEdit profile={profile} />
		</div>
	);
};

export default Profile;
