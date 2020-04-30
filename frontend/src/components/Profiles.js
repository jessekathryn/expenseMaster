import React from 'react'
import Profile from './Profile'
import {Route, Link} from 'react-router-dom'

const Profiles = (props) => {
console.log(props)
  return (
    <div>
      {props.profiles.map(profile =>
        <li key={profile.id}>
        <Link to={`/profiles/${profile.id}`}>{profile.name} - ${profile.balance}</Link>
        </li>)}
    </div>
  )
}

export default Profiles