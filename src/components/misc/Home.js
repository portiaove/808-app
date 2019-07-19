import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { withAuthContext } from '../../contexts/AuthStore'

const Home = (props) => {

  if (props.isAuthenticated()) {
    return < Redirect to='/home' />
  }
  
  return(
    <div className='Home'>
      <Link className='Link' to='/login'><button className='btn-Link'>Log in</button></Link>
      <Link className='Link' to='/register'><button className='btn-Link'>Register</button></Link>
    </div>
  )
}

export default withAuthContext(Home)