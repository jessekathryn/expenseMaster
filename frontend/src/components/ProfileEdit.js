import React from 'react'
import {connect} from 'react-redux'
import {editProfile} from '../actions/editProfile'

class ProfileEdit extends React.Component {

  state = {
    name: '',
    balance: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let profile = {...this.state, id: this.props.profile.id}
    this.props.editProfile(profile)
    this.setState({
      name: '',
      balance: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Profile Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Balance: </label>
          <input type='text' placeholder='Balance' value={this.state.balance} name="balance" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

ProfileEdit.defaultProps = {
  profiles: {}
}


export default connect(null, {editProfile})(ProfileEdit)