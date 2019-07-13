import React from 'react';
import Cards from './Cards';
import BeatService from '../../services/BeatService';

class Feed extends React.Component {

  state = {
    beats: [],
    orderedBy: {
      field: null,
      direction: null
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


  handleBpm = () => {
    if (this.state.orderedBy.direction !== 'asc') {
      this.setState({
        orderedBy: {
          field: 'bpm',
          direction: 'asc'
        }
      })
    } else {
      this.setState({
        orderedBy: {
          field: 'bpm',
          direction: 'desc'
        }
      })
    }
  }

  handleRecent = () => {
    if (this.state.orderedBy.direction !== 'asc') {
      this.setState({
        orderedBy: {
          field: 'createdAt',
          direction: 'asc'
        }
      })
    } else {
      this.setState({
        orderedBy: {
          field: 'createdAt',
          direction: 'desc'
        }
      })
    }
  }

  handlePopular = () => {
    if (this.state.orderedBy.direction !== 'asc') {
      this.setState({
        orderedBy: {
          field: 'likes',
          direction: 'asc'
        }
      })
    } else {
      this.setState({
        orderedBy: {
          field: 'likes',
          direction: 'desc'
        }
      })
    }
  }

  // handleOrder = (field) => {
  //   if (this.state.orderedBy.direction !== 'asc') {
  //     this.setState({
  //       orderedBy: {
  //         field: field,
  //         direction: 'asc'
  //       }
  //     })
  //   } else {
  //     this.setState({
  //       orderedBy: {
  //         field: field,
  //         direction: 'desc'
  //       }
  //     })
  //   }
  // }

  beatsByBpm = (direction) => {
    if (direction !== 'asc') {
      return this.state.beats.sort((a, b) => (a.bpm - b.bpm))
    } else {
      return this.state.beats.sort((a, b) => (b.bpm - a.bpm))
    }    
  }

  beatsByCreatedAt = (direction) => {
    if (direction !== 'asc') {
      return this.state.beats.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : (a.createdAt < b.createdAt) ? -1 : 0)
    } else {
      return this.state.beats.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : (a.createdAt > b.createdAt) ? -1 : 0)
    }   
  }

  beatsByPopular = (direction) => {
    if (direction !== 'asc') {
      return this.state.beats.sort((a, b) => (a.likes - b.likes))
    } else {
      return this.state.beats.sort((a, b) => (b.likes - a.likes))
    }   
  }

  render() { 
    const { beats, orderedBy } = this.state
    let orderedBeats = beats

    if (orderedBy.field === 'bpm') {
      orderedBeats = this.beatsByBpm(orderedBy.direction)
    }
    if (orderedBy.field === 'createdAt') {
      orderedBeats = this.beatsByCreatedAt(orderedBy.direction)
    }
    if (orderedBy.field === 'likes') {
      orderedBeats = this.beatsByPopular(orderedBy.direction)
    }

    return(
      <div className="Feed">
        <div>
          {/* <button onClick={this.handleOrder('bpm')}>Bpm</button> */}
          <button onClick={this.handleBpm}>Bpm</button>
          <button onClick={this.handleRecent}>Recent</button>
          <button onClick={this.handlePopular}>Popular</button>
        </div>
        <div className="">
        {orderedBeats.map((beat, i) => (
          < Cards fetchBeats={this.fetchBeats} beats={beat} key={i} />
        ))}
        </div>
      </div>
    )
  }
}

export default Feed