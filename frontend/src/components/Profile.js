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
			<h4>$ Activity </h4> 
			<h6>{profile ? profile.name : null}</h6>
			<ActivitiesContainer profile={profile} />
			<br />
			<h7>$ Edit Profile</h7>
			<ProfileEdit profile={profile} />
		</div>
	);
};

export default Profile;
