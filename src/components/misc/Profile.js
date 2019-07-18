import React from 'react';
import Cards from '../feed/Cards';
import ProfileCards from './ProfileCards'
import { withAuthContext } from '../../contexts/AuthStore'
import BeatService from '../../services/BeatService'
import AuthService from '../../services/AuthService'
import './Profile.css'

class Profile extends React.Component {

  state = {
    username: '',
    email: '',
    avatarURL: '',
    beats: []
  }

  fetchBeats = () => {

    if (this.props.match.params.id) {
      const { id } = this.props.match.params
      BeatService.getProfile(id).then(
        beats => { 
          this.setState({
            beats: beats.data.beats,
            username: beats.data.username,
            email: beats.data.email,
            avatarURL: beats.data.avatarURL,
          })
        }
      )
    } else {
    const { id, username, avatarURL, email } = this.props.user
    BeatService.userBeats(id).then(
      beats => this.setState({ 
        beats: beats.data,
        username,
        avatarURL,
        email
      })
    )
    }
  }

  componentDidMount() {
    this.fetchBeats()
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.email !== nextProps.user.email) {
      const { id, username, avatarURL, email } = this.props.user
      BeatService.userBeats(id).then(
        beats => this.setState({ 
          beats: beats.data,
          username,
          avatarURL,
          email
        })
      )
    }
  }

  logout = () => {
    AuthService.logout().then(
      () => this.props.onUserChange(null)
    )
  }

  render() {
    
    const { username, email, avatarURL, beats } = this.state
    const { id } = this.props.match.params
    // console.log(id)
    // console.log(beats)
    console.log('Profile Render')

    const UserBeats = beats.map((beat, i) => (
      < Cards beats={beat} key={i} />
    ))

    const ProfileBeats = beats.map((beat, i) => (
      < ProfileCards beats={beat} key={i} />
    ))

    return(
      <div className="Profile">
        <header className='Profile-Header'>
          <div className='Profile-Image'>
            <img src={avatarURL} alt=''/>
          </div>
          <div className='Profile-Info'>
            <h1>{username}</h1>
            <p>{email}</p>
            {!id && <button onClick={this.logout}>Logout</button>}
          </div>
        </header>
        {!id && ProfileBeats}
        {id && ProfileBeats}
      </div>
    )
  } 
}

export default withAuthContext(Profile)