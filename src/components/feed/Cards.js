import React from 'react';
import { Link } from 'react-router-dom'
import BeatService from '../../services/BeatService'
import Moment from 'react-moment'

let start = null

class Cards extends React.Component {

  state = {
    counter: 0,
    likes: this.props.beats.likes,
    liked: null
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

    const { liked, likes } = this.state
    const { id } = this.props.beats
    console.log(liked)
    console.log(this.props.beats.likes)
    if (!liked) {
      BeatService.likeBeat(id).then(
        () => {
          console.log("like")
          this.setState({ likes: likes + 1, liked: !liked })
        }
      )
    } else {
      BeatService.dislikeBeat(id).then(
        () => {
          console.log("dislike")
          this.setState({ likes: likes - 1, liked: !liked })
        }
      )
    }
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
    <div className="container-fluid">
      <div className="row">
          <div className="col-12 mt-3">
              <div className="card">
                  <div className="card-horizontal">
                  { avatarURL &&
                       <div className="img-square-wrapper">
                          <img className="avatarURL" src={avatarURL} alt=""/>
                      </div>}
                      <div className="card-body">
                          <h4 className="card-title">{name ? name : 'LA GRAN ROLA'}</h4>
                          {avatarURL && <Link to={`/profile/${id}`} className="card-text">{username}</Link>}
                          <button onClick={this.handleStart}>Play</button>
                      </div>{ avatarURL &&
                      <div className="card-body">
                          <h3>{this.state.likes} likes</h3>
                          <button onClick={this.handleLike}>Like</button>
                          <div>
                          <small className="text-muted"><Moment fromNow>{createdAt}</Moment></small>
                          </div>
                      </div>}
                  </div>
                  <div className="card-footer">
                      <small className="text-muted">{bpm} bpm</small>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}
}

export default Cards;