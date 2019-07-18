import React from 'react'
import { Link } from 'react-router-dom'
import BeatService from '../../services/BeatService'
import Moment from 'react-moment'
import '../feed/Cards.css'
import playIcon from '../../images/play.svg'
import pauseIcon from '../../images/pause.svg'

let start = null

// class ProfileCards extends React.Component {
//   state = {
//     counter: 0,
//     play: false
//   }

  
//   handleStart = () => {

//     const { clHat, opHat, loTom, hiTom, kick, snare } = this.props.beats

    
//     const { bpm } = this.props.beats
//     const { play } = this.state
//     console.log('start')

//     if (!start) {
//       this.setState({ counter: 0, play: !play }, () => {
//         start = setInterval(this.count, Math.round((60000/bpm)/4))
//         console.log('on')
//       })
//     } else {
//       clearInterval(start);
//       start = null
//       this.setState({ play: !play })
//       console.log('off')
//     }
//   }

//   count = () => {
//     const { clHat, opHat, loTom, hiTom, kick, snare } = this.props.beats
//     const { counter } = this.state

//     kick[counter] && new Audio('kick.mp3').play()
//     snare[counter] && new Audio('snare.mp3').play()
//     clHat[counter] && new Audio('clHat.mp3').play()
//     opHat[counter] && new Audio('opHat.mp3').play()
//     loTom[counter] && new Audio('loTom.mp3').play()
//     hiTom[counter] && new Audio('hiTom.mp3').play()

//     this.setState({
//       counter: counter > 14 ? 0 : counter + 1
//     })
//   }

//   handlePlay = () => {
//     new Audio('kick.mp3').play()
//   }
  

  
//   render() {
//     const { bpm, name, createdAt }
//     = this.props.beats
//     const { username, avatarURL, id } = this.props.beats.owner
//     const { play } = this.state
//     const { liked } = this.state
//     console.log(this.props.beats)
    
//     console.log('ProfileCards Render')

//   return(
//       <div className='Card'>
//         <div className="Info">
//           <div className="Info-Right">
//             <button onClick={this.handlePlay}>PLAAAAYYY</button>
//             <div className="Info-Right-Up">
//               <h3>{name ? name : 'LA GRAN ROLA'}</h3>
//             </div>
//             <div className='Info-Right-Down'>
//               <img onClick={this.handleStart} ref={(node) => console.log(node)} className='Play-Pause-Btn' src={play ? pauseIcon : playIcon} />
//             </div>
//           </div>
//         </div>
//         <div className="Card-Footer">
//           <small className="createdAt"><Moment fromNow>{createdAt}</Moment></small>
//           <small className='bpm'>{bpm} bpmm</small>
//         </div>
//       </div>
//   )
// }
// }

class ProfileCards extends React.Component {

  handlePlay = () => {
    const kick = new Audio('/kick.mp3').play()
    if (kick !== undefined) {
      kick.then((x) => {
        console.log(`everything went right: ${x}`)
      }).catch((error) => console.log(`everything went wrong: ${error}`))
    }


    

    console.log(kick)
    // console.log(kick.play())
    // kick.play()
  }

  render() {
    return(
      <div>
        <button onClick={this.handlePlay}>PLAY MOTHERFUCKER</button>
      </div>
    )
  }
}

export default ProfileCards