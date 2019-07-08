import React from 'react'
import Tone from 'tone';


class Step extends React.Component {

  handleStyle = () => {
    const {activeMode, index, counter } = this.props 
    if (index === counter || activeMode) {
      return 'red'
    } else {
      return 'black'
    }
  }

  
  render() {
    const { onClick, activeMode, index, counter } = this.props
    const activeStep = index === counter

    return(
      <div>
      <button onClick={onClick} style={{background: 'yellow', height: '40px', width: '20px'}}>
        <div style={{background: `${activeStep || activeMode ? 'red' : 'black'}`, height: '9px', width: '9px'}}></div>
      </button>
        <p>{index+1}</p>
        {activeStep && <p><strong>O</strong></p>}
      </div>
    )
  }
}

export default Step