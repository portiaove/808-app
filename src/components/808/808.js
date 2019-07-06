import React from 'react';
import Drum from './Drum';
import Step from './Step'

class MachineDrum extends React.Component {
  state = {
    drums: {
      kick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      snare: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      clHat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      opHat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      hiTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      loTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    },
    bpm: Number,
    activeDrum: 'kick'
  }

  handleActiveDrum = (e) => {
    const activeDrum = e.target.name
    this.setState({
      activeDrum
    })
  }

  handleStep = (index, e) => {
    const { activeDrum } = this.state
    console.log(index)
    console.log(activeDrum)
    this.setState({
      
    })
  }

  render() {
    const {activeDrum} = this.state
    const {kick} = this.state.drums

    const Steps = kick.map((el, index) => {

      return < Step onClick={this.handleStep.bind(this, index)} key={index} />

    })

    return (
      <div>
        <h1>This Is The Machine Drum</h1>
        <div className="d-flex justify-content-center ">
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} title="Kick" name="kick"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} title="Snare" name="snare"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} title="Cl Hat" name="clHat"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} title="Op Hat" name="opHat"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} title="Lo Tom" name="loTom"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} title="Hi Tom" name="hiTom"/>
        </div>
        <div className="container pt-5 d-flex justify-content-around ">

          {Steps}

        </div>
      </div>
    )
  }
}

export default MachineDrum