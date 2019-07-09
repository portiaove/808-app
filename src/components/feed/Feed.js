import React from 'react';
import Cards from './Cards';
import BeatService from '../../services/BeatService';

class Feed extends React.Component {

  state = {
    beats: []
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

  render() {
    const { beats } = this.state
    return(
      <div className="Feed">
        {beats.map((beat, i) => (
          < Cards beats={beat} key={i} />
        ))}
      </div>
    )
  }
}

export default Feed