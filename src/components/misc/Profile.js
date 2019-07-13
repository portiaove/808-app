import React from 'react';
import Cards from '../feed/Cards';
import { withAuthContext } from '../../contexts/AuthStore'
import BeatService from '../../services/BeatService'
import AuthService from '../../services/AuthService'

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
            avatarURL: beats.data.avatarURL
          })
        }
      )
    } else {
    const { id } = this.props.user
    BeatService.userBeats(id).then(
      beats => this.setState({ 
        beats: beats.data 
      })
    )
    }
  }

  componentDidMount() {
    this.fetchBeats()
  }

  logout = () => {
    AuthService.logout().then(
      () => this.props.onUserChange(null)
    )
  }

  render() {
    
    const { beats } = this.state
    const { username, email, avatarURL } = this.props.user
    const { id } = this.props.match.params

    return(
      <div className="Profile">
        <img src={id ? this.state.avatarURL : avatarURL} alt=''/>
        <h1>{id ? this.state.username : username}</h1>
        <p>{id ? this.state.email : email}</p>
        <button onClick={this.logout}>Logout</button>
        {beats.map((beat, i) => (
          < Cards beats={beat} key={i} />
        ))}
      </div>
    )
  } 
}

export default withAuthContext(Profile)