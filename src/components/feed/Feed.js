import React from 'react';
import Cards from './Cards';
import BeatService from '../../services/BeatService';

class Feed extends React.Component {

  state = {
    beats: [],
    bpm: '',
    likes: '',
    createdAt: ''
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
    if (this.state.bpm !== 'asc') {
      this.setState({
        beats: this.state.beats.sort((a, b) => (a.bpm > b.bpm) ? 1 : (a.bpm < b.bpm) ? -1 : 0),
        bpm: 'asc'
      })
    } else {
      this.setState({
        beats: this.state.beats.sort((a, b) => (a.bpm < b.bpm) ? 1 : (a.bpm > b.bpm) ? -1 : 0),
        bpm: 'desc'
      })
    }
  }

  handleRecent = () => {
    if (this.state.createdAt !== 'asc') {
      this.setState({
        beats: this.state.beats.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : (a.createdAt < b.createdAt) ? -1 : 0),
        createdAt: 'asc'
      })
    } else {
      this.setState({
        beats: this.state.beats.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : (a.createdAt > b.createdAt) ? -1 : 0),
        createdAt: 'desc'
      })
    }
  }

  handlePopular = () => {
    if (this.state.likes !== 'asc') {
      this.setState({
        beats: this.state.beats.sort((a, b) => (a.likes > b.likes) ? 1 : (a.likes < b.likes) ? -1 : 0),
        likes: 'asc'
      })
    } else {
      this.setState({
        beats: this.state.beats.sort((a, b) => (a.likes < b.likes) ? 1 : (a.likes > b.likes) ? -1 : 0),
        likes: 'desc'
      })
    }
  }


  // NO FUNCIONA...!
  
  // handleOrder = (name) => {
  //   if (this.state[name] !== 'asc') {
  //     this.setState({
  //       beats: this.state.beats.sort((a, b) => (a[name] > b[name]) ? 1 : (a[name] < b[name]) ? -1 : 0),
  //       [name]: 'asc'
  //     })
  //   } else {
  //     this.setState({
  //       beats: this.state.beats.sort((a, b) => (a[name] < b[name]) ? 1 : (a[name] > b[name]) ? -1 : 0),
  //       [name]: 'desc'
  //     })
  //   }
  // }


  render() { console.log(this.state)
    const { beats } = this.state
    return(
      <div className="Feed">
        <div>
          {/* <button onClick={this.handleOrder('bpm')}>Bpm</button> */}
          <button onClick={this.handleBpm}>Bpm</button>
          <button onClick={this.handleRecent}>Recent</button>
          <button onClick={this.handlePopular}>Popular</button>
        </div>
        <div>
        {beats.map((beat, i) => (
          < Cards beats={beat} key={i} />
        ))}
        </div>
      </div>
    )
  }
}

export default Feed