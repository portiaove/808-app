import React from 'react';
import Cards from './Cards';
import BeatService from '../../services/BeatService';
import './Feed.css'

class Feed extends React.Component {

  state = {
    beats: [],
    orderedBy: {
      field: 'createdAt',
      direction: 'asc'
    }
  }

  fetchBeats = () => {
    BeatService.listBeats().then(
      (beats) => {
        this.setState({
        beats: beats.data
      })}
    )
  }

  componentDidMount() {
    this.fetchBeats()
  }

  handleOrder = (e) => {
    const field = e.target.name
    const { direction } =this.state.orderedBy
    if (direction !== 'asc') {
      this.setState({
        orderedBy: {
          field,
          direction: 'asc'
        }
      })
    } else {
      this.setState({
        orderedBy: {
          field,
          direction: 'desc'
        }
      })
    }
  }

  beatsBy = (direction, field) => {
    if (direction !== 'asc') {
      return this.state.beats.sort((a, b) => (a[field] > b[field]) ? 1 : (a[field] < b[field]) ? -1 : 0)
    } else {
      return this.state.beats.sort((a, b) => (a[field] < b[field]) ? 1 : (a[field] > b[field]) ? -1 : 0)
    }   
  }


  render() { 
    const { beats, orderedBy } = this.state
    let orderedBeats = beats

    console.log('Feed Render')

    if (orderedBy.field === 'bpm') {
      orderedBeats = this.beatsBy(orderedBy.direction, 'bpm')
    }
    if (orderedBy.field === 'createdAt') {
      orderedBeats = this.beatsBy(orderedBy.direction, 'createdAt')
    }
    if (orderedBy.field === 'likes') {
      orderedBeats = this.beatsBy(orderedBy.direction, 'likes')
    }

    return(
      <div className="Feed">

        <header className="BtnOrders">
          <button onClick={this.handleOrder} name='bpm'>Bpm</button>
          <button onClick={this.handleOrder} name='createdAt'>Recent</button>
          <button onClick={this.handleOrder} name='likes'>Popular</button>
        </header>
        
        {orderedBeats.map((beat, i) => (
          < Cards fetchBeats={this.fetchBeats} beats={beat} key={i} />
        ))}

      </div>
    )
  }
}

export default Feed