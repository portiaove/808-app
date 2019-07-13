import React from 'react'
import './Footer.css'
import { withAuthContext } from '../../contexts/AuthStore'
import beatIcon from '../../808Icon.svg'
import beatSelectedIcon from '../../808IconSelected.svg'
import homeIcon from '../../world.svg'
import homeSelectedIcon from '../../worldSelected.svg'
import profileIcon from '../../profile.svg'
import profileSelectedIcon from '../../profileSelected.svg'
import holdingHands from '../../holding-hands-in-a-circle.svg'
import { Link, withRouter } from 'react-router-dom'


class Footer extends React.Component {

  state = {
    selected: this.props.location.pathname
  }

  handleSelection = (e) => {
    const { name } = e.target
    this.setState({ selected: name })
  }

  render() {

    const { selected } = this.state
  return(
    <footer className='Footer'>
      <div className='flexFooter'>
        <div>
          <Link to='/profile' onClick={this.handleSelection}><img alt='profileIcon' name='/profile' className='homeIcon' src={(selected === '/profile') ? profileSelectedIcon : profileIcon} /></Link>
        </div>
        <div>
         <Link to='/home' onClick={this.handleSelection}><img alt='homeIcon' name='/home' className='homeIcon' src={(selected === '/home') ? homeSelectedIcon : homeIcon} /></Link>
        </div>
        <div>
         <Link to='/808' onClick={this.handleSelection}><img alt='808Icon' name='/808'  className='homeIcon' src={(selected === '/808') ? beatSelectedIcon : beatIcon} /></Link>
        </div>
        {/* <div>
         <Link to='/808' onClick={this.handleSelection}><img alt='808Icon' name='/808'  className='homeIcon' src={(selected === '/808') ? holdingHands : holdingHands} /></Link>
        </div> */}
      </div>
    </footer>
  )
  }
}

export default withRouter(Footer)