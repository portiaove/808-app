import React from 'react';
import { Link } from 'react-router-dom'
import BeatService from '../../services/BeatService'
import Moment from 'react-moment'
import './Cards.css'

let start = null

class Cards extends React.Component {

  state = {
    counter: 0
  }

  handleStart = () => {
    const { bpm } = this.props.beats

    if (!start) {
      this.setState({ counter: 0 }, () => {
        start = setInterval(this.count, Math.round((60000/bpm)/4))
      })
    } else {
      clearInterval(start);
      start = null
    }
  }

  count = () => {
    const { clHat, opHat, loTom, hiTom, kick, snare } = this.props.beats
    const { counter } = this.state

    kick[counter] && new Audio('kick.wav').play()
    snare[counter] && new Audio('snare.wav').play()
    clHat[counter] && new Audio('clHat.wav').play()
    opHat[counter] && new Audio('opHat.wav').play()
    loTom[counter] && new Audio('loTom.wav').play()
    hiTom[counter] && new Audio('hiTom.wav').play()

    this.setState({
      counter: counter > 14 ? 0 : counter + 1
    })
  }

  handleLike = (e) => {
    e.preventDefault()

    const { id } = this.props.beats
      BeatService.likeBeat(id).then(
        () => {
          console.log("like")
          this.props.fetchBeats()
        }
      )
  }

  componentDidMount() {

    const { id } = this.props.beats
    BeatService.checkIfLiked(id).then(
      response => {this.setState({ liked: response.data })}
    )
  }
  
  render() {
    const { bpm, name, createdAt }
    = this.props.beats
    const { username, avatarURL, id } = this.props.beats.owner

  return(
    <div className='Card'>
      <div className="Info">
      { avatarURL &&
          <Link to={`/profile/${id}`} className="Info-Left">
            <div className='Image-Wrapper'>
              <img className="Card-Image" src={avatarURL} alt=""/>
            </div>
            <div className='Card-Username'>
            <h5>{username}</h5>
            </div>
          </Link>
      }
        <div className="Info-Right">
          <div>
            <h3 className="title">{name ? name : 'LA GRAN ROLA'}</h3>
            <button onClick={this.handleStart}>Play</button>
          </div>{ avatarURL &&
          <div className="body">
            <h3>{this.props.beats.likes} likes</h3>
            <button onClick={this.handleLike}>Like</button>
            
          </div>}
        </div>
      </div>
      <div className="Card-Footer">
        <small className="createdAt"><Moment fromNow>{createdAt}</Moment></small>
        <small className='bpm'>{bpm} bpm</small>
      </div>
    </div>
  )
}
}

export default Cards;