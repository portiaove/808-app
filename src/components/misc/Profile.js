import React from 'react';
import Cards from '../feed/Cards';
import { withAuthContext } from '../../contexts/AuthStore'
import BeatService from '../../services/BeatService'

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
        beats => this.setState({
          beats: beats.data.beats,
          username: beats.data.username,
          email: beats.data.email,
          avatarURL: beats.data.avatarURL
        })
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

  render() {
    console.log(this.state.beats)
  
    const { beats } = this.state
  const { username, email, avatarURL } = this.props.user

    return(
      <div className="Profile">
        <img src={avatarURL} />
        <h1>{username}</h1>
        <p>{email}</p>
        {beats.map((beat, i) => (
          < Cards beats={beat} key={i} />
        ))}
      </div>
    )
  } 
}

export default withAuthContext(Profile)