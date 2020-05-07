import React from "react";
import { Link } from "react-router-dom";

const Profiles = (props) => {
	console.log(props);
	return (
		<div>
			<h4>$ Profiles</h4>
			{props.profiles.map((profile) => (
				<div key={profile.id}>
					<Link to={`/profiles/${profile.id}`} style={{color: "light green"}}>
						{profile.name} 
					</Link> 
				</div>
			))}
		</div>
	);
};

export default Profiles;
