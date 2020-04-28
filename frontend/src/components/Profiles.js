import React from 'react'
import { Redirect } from 'react-router-dom'
import ProfileEdit from './ProfileEdit'

import ActivitiesContainer from '../containers/ActivitiesContainer'

const Profile = (props) => {

    console.log(props)

    let profile = props.profiles.filter(profile => profile.id == props.match.params.id)[0]
    console.log(profile)

    return (  

    <div>
      <h2>
        {Profile ? Profile.name : null} - {Profile ? Profile.balance : null}
      </h2>
      <ActivitiesContainer Profile={Profile}/><br/>
      <h4>Edit Profile</h4>
      <ProfileEdit Profile={Profile}/>
    </div>
  )

}

export default Profile