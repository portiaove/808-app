import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Drum from './Drum';
import Step from './Step';
import BeatService from '../../services/BeatService';
import './808.css'


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
    nameIt: false,
    redirect: false
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

  count = () => {
    const { counter, drums } = this.state
    
    drums.kick[counter] && new Audio('kick.mp3').play()
    drums.snare[counter] && new Audio('snare.mp3').play()
    drums.clHat[counter] && new Audio('clHat.mp3').play()
    drums.opHat[counter] && new Audio('opHat.mp3').play()
    drums.loTom[counter] && new Audio('loTom.mp3').play()
    drums.hiTom[counter] && new Audio('hiTom.mp3').play()

    this.setState({
      counter: counter > 14 ? 0 : counter + 1
    })
  }

  handleBpm = (e) => {
    let bpm = Number(e.target.value)

    this.setState({
      bpm: bpm
    }, () => {
      clearInterval(start)
      start = setInterval(this.count, Math.round((60000/bpm)/4))
    })
  }

  saveBeat = (e) => {
    e.preventDefault()

    const { bpm, name } = this.state
    const data = {...this.state.drums, bpm, name}

    BeatService.saveBeat(data).then(
      (response) => {
        this.setState({ redirect: true })
        // console.log(response)
      },
      error => {
        // console.error(error)
      }
    )
  }

  closeNameBeat = () => {
    const { nameIt } = this.state
    this.setState({ nameIt: !nameIt})
  }

  nameBeat = (e) => {
    e.preventDefault()
    console.log(e.target.style.display)
    clearInterval(start)
    this.setState({ nameIt: !this.state.nameIt})
  }

  handleName = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }


  render() {
    const { activeDrum, nameIt, name } = this.state
    const { kick } = this.state.drums

    console.log('808 Render')

    if (this.state.redirect) {
      return < Redirect to="/home" />
    }

    const Steps = kick.map((el, index) => {
      return < Step 
        activeMode={this.state.drums[activeDrum][index]} 
        activeDrum={activeDrum}
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
      <div className='Machine-Drum'>
        <h1>This Is The Machine Drum</h1>
        < Link to='/home'>Go Back</Link>        
        <div className="Instruments">
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} title="Kick" name="kick"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} title="Snare" name="snare"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} title="Cl Hat" name="clHat"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} title="Op Hat" name="opHat"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} title="Lo Tom" name="loTom"/>
          < Drum activeDrum={activeDrum} onClick={this.handleActiveDrum} title="Hi Tom" name="hiTom"/>
        </div>
        <div className='Controllers'>
          <h3>{this.state.bpm}</h3><h3>bpm</h3>
          <form>
            <input onChange={this.handleBpm} value={this.state.bpm} type="range" name="bpm" min="56" max="240" step="0.5"/>
          </form>
          <button onClick={this.handleStart}>Start</button>      {/*ALTERNAR START STOP*/}
          {
            nameIt && 
            <div className="modal">
              <div className="modal-content">
                <span onClick={this.closeNameBeat} className="close-btn">&times;</span>
                <form className='Inputs'>
                  <label>Name it!</label>
                  <input onChange={this.handleName} name='name' value={name}></input>
                  <button onClick={this.saveBeat}>Save</button>
                </form>
              </div>
            </div>
          }
          <button onClick={this.nameBeat}>Save</button>
        </div>

        <div className="Steps">

          {Steps}

        </div>
      </div>
    )
  }
}

export default MachineDrum