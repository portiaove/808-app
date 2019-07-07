import React from 'react';
import Drum from './Drum';
import Step from './Step'

let hola = null

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
    bpm: 120,
    activeDrum: 'kick',
    counter: 0
  }


  handleActiveDrum = (e) => {
    const activeDrum = e.target.name
    this.setState({
      activeDrum
    })
  }

  handleStep = (index, e) => {

    const { activeDrum, drums } = this.state
    const newArr = drums[activeDrum].slice()
    newArr[index] = !drums[activeDrum][index]

    this.setState({
      drums: {
        ...drums,
        [activeDrum]: newArr
      }             
    })
  }

  count = () => {
    const { counter } = this.state
    if (counter > 15) {
      this.setState({
        counter: 0
      })
    } else {
      console.log(counter)
      this.setState({
        counter: counter + 1
      })
    }
  }
  
  bpmConversion = (bpm) => {
    return Math.round(60000/bpm)
  }

  handleStart = () => {
    const { bpm } = this.state
    if (!hola) {
      this.setState({
        counter: 0
      })
      hola = setInterval(this.count, 500 /*this.bpmConversion(bpm)*/) //NOT WORKING
    } else {
      clearInterval(hola);
      hola = null;
    }
  }


  handleBpm = (e) => {
    let bpm = e.target.value
    this.setState({
      bpm: bpm
    })
  }

  render() {

    const {activeDrum} = this.state
    const {kick} = this.state.drums

    const Steps = kick.map((el, index) => {

      return < Step 
      activeStep={this.state.drums[activeDrum][index]} 
      kick={this.state.drums.kick[index]}
      snare={this.state.drums.snare[index]}
      clHat={this.state.drums.clHat[index]}
      opHat={this.state.drums.opHat[index]}
      hiTom={this.state.drums.hiTom[index]}
      loTom={this.state.drums.loTom[index]}
      onClick={this.handleStep.bind(this, index)} 
      index={index} key={index} />

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
        <button onClick={this.handleStart}>Start</button>
        <h3>{this.state.bpm}</h3><h3>bpm</h3>
        <form>
          <input onChange={this.handleBpm} value={this.state.bpm} type="range" name="bpm" min="56" max="240" step="0.5"/>
        </form>

        <div className="container pt-5 d-flex justify-content-around ">

          {Steps}

        </div>
      </div>
    )
  }
}

export default MachineDrum