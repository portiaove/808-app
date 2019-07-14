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
    console.log('hola')
    this.fetchBeats()
  }

  componentWillUnmount() {
    console.log('adios')
  }

  logout = () => {
    AuthService.logout().then(
      () => this.props.onUserChange(null)
    )
  }

  render() {
    
    const { beats } = this.state
    const { username, email, avatarURL } = this.state
    const { id } = this.props.match.params
    let checkUser = id
    // if (checkUser === undefined) {
    //   this.fetchBeats()
    //   checkUser = true
    //   console.log(checkUser)
    // }
    console.log('cuidado')

    return(
      <div className="Profile">
        <img src={avatarURL} alt=''/>
        <h1>{username}</h1>
        <p>{email}</p>
        {!id && <button onClick={this.logout}>Logout</button>}
        {beats.map((beat, i) => (
          < Cards beats={beat} key={i} />
        ))}
      </div>
    )
  } 
}

export default withAuthContext(Profile)