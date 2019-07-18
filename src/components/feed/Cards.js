import React from 'react';
import { Link } from 'react-router-dom'
import BeatService from '../../services/BeatService'
import Moment from 'react-moment'
import './Cards.css'
import playIcon from '../../images/play.svg'
import pauseIcon from '../../images/pause.svg'

let start = null

class Cards extends React.Component {

  state = {
    counter: 0,
    play: false
  }


  fetchLikes = () => {
    const { id } = this.props.beats
    BeatService.checkIfLiked(id).then(
      response => {this.setState({ liked: response.data })}
    )
  }
  
  componentDidMount() {
    this.fetchLikes()
  }
  
  handleStart = () => {

    const { bpm } = this.props.beats
    const { play } = this.state
    console.log('start')

    if (!start) {
      this.setState({ counter: 0, play: !play }, () => {
        start = setInterval(this.count, Math.round((60000/bpm)/4))
        console.log('on')
      })
    } else {
      clearInterval(start);
      start = null
      this.setState({ play: !play })
      console.log('off')
    }
  }

  count = () => {
    const { clHat, opHat, loTom, hiTom, kick, snare } = this.props.beats
    const { counter } = this.state
    console.log(this.props.beats)

    kick[counter] && new Audio('kick.mp3').play()
    snare[counter] && new Audio('snare.mp3').play()
    clHat[counter] && new Audio('clHat.mp3').play()
    opHat[counter] && new Audio('opHat.mp3').play()
    loTom[counter] && new Audio('loTom.mp3').play()
    hiTom[counter] && new Audio('hiTom.mp3').play()

    this.setState({
      counter: counter > 14 ? 0 : counter + 1
    })
  }


  handleLike = (e) => {
    e.preventDefault()

    const { id } = this.props.beats
      BeatService.likeBeat(id).then(
        () => {
          this.props.fetchBeats()
          this.fetchLikes()
        }
      )
  }


  componentWillReceiveProps(nextProps) {

    if (start) {
      clearInterval(start);
      start = null
      this.setState({ play: !this.state.play })
    }

    if (this.props.beats.id !== nextProps.beats.id) {
      const { id } = nextProps.beats
      BeatService.checkIfLiked(id).then(
        response => {this.setState({ liked: response.data })}
      )
    }
  }

  
  render() {
    const { bpm, name, createdAt }
    = this.props.beats
    const { username, avatarURL, id } = this.props.beats.owner
    const { play } = this.state
    const { liked } = this.state
    
    console.log('Cards Render')

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
            <div className="Info-Right-Up">
              <h3>{name ? name : 'LA GRAN ROLA'}</h3>
            </div>
            <div className='Info-Right-Down'>
              { avatarURL &&
              <div className="head">
                <svg  onClick={this.handleLike} className={liked ? 'heartOn' : 'heartOff'} viewBox="0 0 32 29.6">
                  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                  c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                </svg> 
                <h5>{this.props.beats.likes} likes</h5>
              </div>}
              <img onClick={this.handleStart} className='Play-Pause-Btn' src={play ? pauseIcon : playIcon} alt='playBtn' />
            </div>
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