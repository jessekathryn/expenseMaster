import React from 'react'
import {Route, Link} from 'react-router-dom'
import Profile from './Profile'

const Profiles = (props) => {

  return (
    <div>
      {props.profiles.map(profile =>
        <li key={profile.id}>
          <Link to={`/profiles/${profile.id}`}>{profile.name} - ${profile.balance}</Link>
        </li> )}
    </div>

  )
}

export default Profiles