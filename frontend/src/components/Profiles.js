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
			displayProfiles = this.props.profiles.filter(profile => profile.name.includes('2020'))
		}

		if (this.state.allSorted) {
			// let sortedArray = [...displayProfiles]
			// let sortedArray = Array.from(displayProfiles)
			let sortedArray = displayProfiles.slice()
			// let sortedArray = displayProfiles.map(x => x)
			// let sortedArray = displayProfiles.filter(x => true)
			displayProfiles = sortedArray.sort(function (a, b) {
				const nameA = a.name.toUpperCase();
				const nameB = b.name.toUpperCase();
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
			<div class="row">
				<div class="col-xl-12">
					<div class="card">
						<div className="card-body">
							<a href="" class="btn btn-primary btn-sm float-right"><i class="uil uil-export ml-1"></i>Export</a>
							<h5 class="card-title mt-0 mb-0">$ Profiles</h5><div>
								<button className="btn btn-success" onClick={this.handleSort}>{this.state.allSorted ? 'Sorted' : 'Sort'}</button>
								<button className="btn btn-success" onClick={this.handleOnClick2020}>{this.state.only2020 ? 'All' : '2020'}</button>
								<div class="table-responsive mt-4">
										<table class="table table-hover table-nowrap mb-0">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">Name</th>
													<th scope="col">Debt</th>
													<th scope="col">Balance</th>
													<th scope="col">Status</th>
													<th scope="col">UpVote</th>
												</tr>
											</thead>
											
											{displayProfiles.map((profile) => (
									
											<tbody>
												<tr>
													<td>{profile.id}</td>
													<td><div key={profile.id}><Link to={`/profiles/${profile.id}`} style={{ color: "light green" }}>{profile.name} </Link></div></td>
													<td>{profile.debt}</td>
													<td>{profile.balance}</td>
													<td><span class="badge badge-soft-warning py-1">Pending</span></td>
													<td><button className="btn btn-primary" onClick={() => this.upVote(profile.id)}>Like {this.state[profile.id] ? this.state[profile.id] : 0}</button></td>
												</tr>
											</tbody>))}
										</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		
		);
	
	}

}

export default Profiles;