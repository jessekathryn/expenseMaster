import React from "react";
import ProfilesContainer from "./containers/ProfilesContainer";
import ActivitiesContainer from "./containers/ActivitiesContainer";
import './assets/scss/theme-dark.scss';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<ProfilesContainer />
			</div>
		);
	}
}

export default App;
