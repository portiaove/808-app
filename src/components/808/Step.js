import React from 'react'
import './808.css'


class Step extends React.Component {

  handleStyle = (drum) => {
    if (drum === 'kick') {
      return 'Kick Step-Active'
    } else if (drum === 'snare') {
      return 'Snare Step-Active'
    } else if (drum === 'clHat') {
      return 'ClHat Step-Active'
    } else if (drum === 'opHat') {
      return 'OpHat Step-Active'
    } else if(drum === 'loTom') {
      return 'LoTom Step-Active'
    } else if (drum === 'hiTom') {
      return 'HiTom Step-Active'
    } else {
      return 'Black Step'
    }
  }

  
  render() {
    const { onClick, activeMode, index, counter, activeDrum } = this.props
    const activeStep = index === counter
    // console.log(counter)
    // console.log(activeStep)
    console.log('Step Render')
    // console.log(activeMode)


    return(
      <div className={activeMode ? this.handleStyle(activeDrum) : 'Step'}>
        <button onClick={onClick} className='Stp-Btn'>
          <div className='Little-Step'>
            <div style={{background: `${activeStep ? 'red' : 'black'}`, height: '9px', width: '9px'}}></div>
            <p>{index+1}</p>
          </div>
        </button>
        {activeStep && <p><strong>O</strong></p>}
      </div>
    )
  }
}

export default Step