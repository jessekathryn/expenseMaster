import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/profiles' style={{paddingRight: '10px'}}>Profiles</Link>
      <Link to='/profiles/new'>Add Profile</Link>
    </div>

  )
}

export default NavBar