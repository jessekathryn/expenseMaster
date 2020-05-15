import React from "react";
import { Link } from "react-router-dom";

class Profiles extends React.Component {
	state = {
		counter: 0
	};

	upVote = (id) => {
		this.state[id]
			? this.setState({ [id]: (this.state[id] += 1) })
			: this.setState({ [id]: 1 });
	};

	handleOnClick = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

render() {
	return (
		<div>
			<h4>$ Profiles</h4>
			{this.props.profiles.map((profile) => (
				<div key={profile.id}>
					<Link to={`/profiles/${profile.id}`} style={{color: "light green"}}>
						{profile.name} 
					</Link> 
					<button className="btn btn-primary" onClick={() => this.upVote(profile.id)}>
							Like {this.state[profile.id] ? this.state[profile.id] : 0}</button>
				</div>
			))}
		</div>
	);
}
	
}

export default Profiles;



// const Profiles = (props) => {
// 	console.log(props);
// 	return (
// 		<div>
// 			<h4>$ Profiles</h4>
// 			{props.profiles.map((profile) => (
// 				<div key={profile.id}>
// 					<Link to={`/profiles/${profile.id}`} style={{color: "light green"}}>
// 						{profile.name} 
// 					</Link> 
// 					<button onClick={() => this.handleOnClick(profile)}>Upvote</button>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default Profiles;
