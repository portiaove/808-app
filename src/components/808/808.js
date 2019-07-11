import React from 'react';
import Drum from './Drum';
import Step from './Step';
import BeatService from '../../services/BeatService';

const EMPTY_BEAT = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

let start = null


class MachineDrum extends React.Component {
  state = {
    drums: {
      kick: [...EMPTY_BEAT],
      snare: [...EMPTY_BEAT],
      clHat: [...EMPTY_BEAT],
      opHat: [...EMPTY_BEAT],
      hiTom: [...EMPTY_BEAT],
      loTom: [...EMPTY_BEAT]
    },
    bpm: 120,
    activeDrum: 'kick',
    counter: 0,
    name: '',
    nameIt: false
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
    
    this.state.drums.kick[this.state.counter] && new Audio('kick.wav').play()
    this.state.drums.snare[this.state.counter] && new Audio('snare.wav').play()
    this.state.drums.clHat[this.state.counter] && new Audio('clHat.wav').play()
    this.state.drums.opHat[this.state.counter] && new Audio('opHat.wav').play()
    this.state.drums.loTom[this.state.counter] && new Audio('loTom.wav').play()
    this.state.drums.hiTom[this.state.counter] && new Audio('hiTom.wav').play()

    this.setState({
      counter: counter > 14 ? 0 : counter + 1
    })
  }
  
  handleStart = () => {
    const { bpm } = this.state

    if (!start) {
      this.setState({ counter: 0 }, () => {
        start = setInterval(this.count, Math.round((60000/bpm)/4)) //NOT WORKING
      })
    } else {
      clearInterval(start);
      start = null;
    }
  }


  handleBpm = (e) => {
    let bpm = Number(e.target.value)
    console.log(this.state.bpm)

    this.setState({
      bpm: bpm
    }, () => {
      clearInterval(start)
      start = setInterval(this.count, Math.round(60000/bpm))
    })
  }

  saveBeat = (e) => {
    e.preventDefault()

    const { bpm, name } = this.state
    const data = {...this.state.drums, bpm, name}

    BeatService.saveBeat(data).then(
      (response) => {
        console.log(response)
      },
      error => {
        console.error(error)
      }
    )
  }

  nameBeat = (e) => {
    e.preventDefault()
    this.setState({ nameIt: !this.state.nameIt})
  }

  handleName = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }


  render() {
    const { activeDrum, nameIt, name } = this.state
    const { kick } = this.state.drums

    const Steps = kick.map((el, index) => {
      return < Step 
        activeMode={this.state.drums[activeDrum][index]} 
        counter={this.state.counter}
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
        <button onClick={this.handleStart}>Start</button>      {/*ALTERNAR START STOP*/}
        {
          nameIt && <div>
            <form>
              <label>Name it!</label>
              <input onChange={this.handleName} name='name' value={name}></input>
              <button onClick={this.saveBeat}>Save</button>
            </form>
          </div>
        }
        <button onClick={this.nameBeat}>Save</button>
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