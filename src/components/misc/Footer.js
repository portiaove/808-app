import React from 'react'
import './Footer.css'
import { withAuthContext } from '../../contexts/AuthStore'
import beatIcon from '../../images/808Icon.svg'
import beatSelectedIcon from '../../images/808IconSelected.svg'
import beatIcon2 from '../../images/808Icon2.svg'
// import homeIcon from '../../images/world.svg'
// import homeSelectedIcon from '../../images/worldSelected.svg'
import profileIcon from '../../images/profile.svg'
import profileSelectedIcon from '../../images/profileSelected.svg'
import holdingHands from '../../images/holding.svg'
import holdingSelected from '../../images/holdingSelected.svg'
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
    let selection = selected
    if (this.props.location.pathname !== '/808') {
      selection = this.props.location.pathname
    }
    
  return(
    <footer className={(selection === '/808') ? 'NoFooter' : 'Footer'}>
      <div className='flexFooter'>
        <div>
          <Link to='/profile' onClick={this.handleSelection}><img alt='profileIcon' name='/profile' className='homeIcon' src={(selection === '/profile') ? profileSelectedIcon : profileIcon} /></Link>
        </div>
        <div>
         <Link to='/home' onClick={this.handleSelection}><img alt='homeIcon' name='/home' className='homeIcon' src={(selection === '/home') ? holdingSelected : holdingHands} /></Link>
        </div>
        <div>
         <Link to='/808' onClick={this.handleSelection}><img alt='808Icon' name='/808'  className='homeIcon' src={(selection === '/808') ? beatSelectedIcon : beatIcon} /></Link>
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