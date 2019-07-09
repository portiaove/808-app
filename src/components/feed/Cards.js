import React from 'react';
import { Link } from 'react-router-dom'

let start = null

class Cards extends React.Component {

  state = {
    counter: 0
  }

  count = () => {
    const { bpm, clHat, opHat, loTom, hiTom, kick, snare } = this.props.beats
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
  
  render() {
    const { bpm, name, likes, createdAt }
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
                          <img className="" src={avatarURL} alt="Card image cap"/>
                      </div>}
                      <div className="card-body">
                          <h4 className="card-title">LA GRAN ROLA</h4>
                          {avatarURL && <Link to={`/profile/${id}`} className="card-text">{username}</Link>}
                          <button onClick={this.handleStart}>Play</button>
                      </div>{ avatarURL &&
                      <div className="card-body">
                          <h3>{likes} likes</h3>
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