import React from 'react';
import Drum from './Drum';
import Step from './Step'

class MachineDrum extends React.Component {
  state = {
    bpm: Number,
    kick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    snare: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    clHat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    opHat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    hiTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    loTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    activeDrum: 'kick'
  }

  handleActiveDrum = (e) => {
    const activeDrum = e.target.name
    this.setState({
      activeDrum
    })
  }

  handleStep = (e) => {
    const { activeDrum } = this.state
    console.log(activeDrum)
    this.setState({
      
    })
  }

  render() {
    const {activeDrum} = this.state
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
          < Step onClick={this.handleStep} i={0} />
          < Step onClick={this.handleStep} i={1} />
          < Step onClick={this.handleStep} i={2} />
          < Step onClick={this.handleStep} i={3} />
          < Step onClick={this.handleStep} i={4} />
          < Step onClick={this.handleStep} i={5} />
          < Step onClick={this.handleStep} i={6} />
          < Step onClick={this.handleStep} i={7} />
          < Step onClick={this.handleStep} i={8} />
          < Step onClick={this.handleStep} i={9} />
          < Step onClick={this.handleStep} i={10} />
          < Step onClick={this.handleStep} i={11} />
          < Step onClick={this.handleStep} i={12} />
          < Step onClick={this.handleStep} i={13} />
          < Step onClick={this.handleStep} i={14} />
          < Step onClick={this.handleStep} i={15} />
          < Step onClick={this.handleStep} i={16} />
        </div>
      </div>
    )
  }
}

export default MachineDrum