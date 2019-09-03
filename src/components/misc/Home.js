import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { withAuthContext } from '../../contexts/AuthStore'
import aobeatsLogo from '../../images/aobeats.svg'
// import './Home.css'

class Home extends React.Component {

  state = {
    img: '',
    login: 'none'
  }


  handleLogin = () => {
    this.setState({img: 'none', login: ''})
  }

  render() {

  if (this.props.isAuthenticated()) {
    return < Redirect to='/home' />
  }
  

  return(
    <div className='Box-Wrapper'>
      <img src={aobeatsLogo} alt='aobeats baby' onClick={this.handleLogin} style={{display: this.state.img}}/>
    <div className='Home' style={{display: this.state.login}}>
      <Link className='Link' to='/login'><button className='btn-Link'>Log in</button></Link>
      <Link className='Link' to='/register'><button className='btn-Link'>Register</button></Link>
    </div>
    </div>
  )
  }
}

export default withAuthContext(Home)