import React from 'react';
import Cards from '../feed/Cards';
import { withAuthContext } from '../../contexts/AuthStore'
import BeatService from '../../services/BeatService'

class Profile extends React.Component {

  state = {
    beats: []
  }

  fetchBeats = () => {
    console.log(this.props.match)
    const { id } = this.props.user
    BeatService.userBeats(id).then(
      beats => this.setState({ beats: beats.data })
    )
  }

  componentDidMount() {
    this.fetchBeats()
  }

  render() {
  
    const { beats } = this.state
  const { username, email, avatarURL } = this.props.user

  console.log(this.state.beats)
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