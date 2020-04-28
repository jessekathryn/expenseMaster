import React from 'react';
import {connect} from 'react-redux'
import ProfilesContainer from './containers/ProfilesContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ProfilesContainer/>
      </div>
    );
  }
}


export default App;
