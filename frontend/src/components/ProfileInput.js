import React from 'react'
import {connect} from 'react-redux'
import {addProfile} from '../actions/addProfile'

class ProfileInput extends React.Component {

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
        this.props.addProfile(this.state)
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

    export default connect(null, {addProfile})(ProfileInput)