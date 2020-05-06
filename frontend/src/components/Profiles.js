import React from "react";
import { Link } from "react-router-dom";

const Profiles = (props) => {
	console.log(props);
	return (
		<div>
			<h4>$ Profiles</h4>
			{props.profiles.map((profile) => (
				<li key={profile.id}>
					<Link to={`/profiles/${profile.id}`}>
						{profile.name} | ${profile.balance}
					</Link>
				</li>
			))}
		</div>
	);
};

export default Profiles;
