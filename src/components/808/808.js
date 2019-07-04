import React from 'react';
import Drum from './Drum'

class MachineDrum extends React.Component {
  state = {
    bpm: Number,
    kick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    snare: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    cl_hat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    op_hat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    hi_tom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    lo_tom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    activeDrum: 'Kick'
  }

  handleActiveDrum = (e) => {
    const activeDrum = e.target.name
    this.setState({
      activeDrum
    })
  }

  render() {
    const {activeDrum} = this.state
    return (
      <div>
        <h1>This Is The Machine Drum</h1>
        <div className="d-flex justify-content-center">
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} name="Snare"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} name="Kick"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} name="Closed Hat"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} name="Open Hat"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} name="Lo Tom"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} name="High Tom"/>
        </div>
      </div>
    )
  }
}

export default MachineDrum