import React from "react";
import { Link } from "react-router-dom";

class Profiles extends React.Component {
	state = {	
	 only2020: false,
	 allSorted: false
	};

	handleSort = (event) => {
		console.log(event)
		this.setState({
			allSorted: !this.state.allSorted
		})
	}

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
	if (this.state.only2020) {
		displayProfiles= this.props.profiles.filter(profile => profile.name.includes('2020'))
		}
	
	if (this.state.allSorted){
		displayProfiles= this.props.profiles.sort(function(a, b) {
			var nameA = a.name.toUpperCase(); 
			var nameB = b.name.toUpperCase(); 
			if (nameA < nameB) {
			  return -1;
			}
			if (nameA > nameB) {
			  return 1;
			}
			return 0;
		  });
		}
		
		
	return (
		<div>
			<button className="btn btn-success" onClick={this.handleSort}>
				{this.state.allSorted ? 'UnSort All' : 'Sort'}
			</button>
			<button className="btn btn-success" onClick={this.handleOnClick2020}>
				{this.state.only2020 ? 'All' : '2020'}
			</button>
			<h4>$ Profiles </h4>

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