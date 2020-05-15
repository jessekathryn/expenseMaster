import React from "react";
import { Link } from "react-router-dom";
import { allFlattenRoutes } from "./routes";

class Profiles extends React.Component {
	state = {	
	 only2020: false
	};

	handleOnClick2020 = (event) => {
		console.log(event)
		this.setState({
			only2020: !this.state.only2020
		})
	}

	upVote = (id) => {
		this.state[id]
			? this.setState({ [id]: (this.state[id] + 1) })
			: this.setState({ [id]: 1 });
	};

	handleOnClick = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

render() {
	let displayProfiles = this.props.profiles;
		// only2020 ? true : 
		// 	displayProfiles
		// else 
		// 	display 2020
		// end 

	return (
		<div>
			<button className="btn btn-success" onClick={this.handleOnClick2020}>
				{this.state.only2020 ? 'All' : '2020'}
			</button>
			<h4>$ Profiles</h4>
			{displayProfiles.map((profile) => (
				<div key={profile.id}>
					<Link to={`/profiles/${profile.id}`} style={{color: "light green"}}>
						{profile.name} 
					</Link> 
					<br></br>
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
