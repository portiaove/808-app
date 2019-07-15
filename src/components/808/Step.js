import React from 'react'
import './808.css'


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
    console.log(activeStep)


    return(
      <div className={activeStep ? 'Step-Active' : 'Step'}>
        <button onClick={onClick} className='Stp-Btn'>
          <div className='Little-Step'>
            <div style={{background: `${activeStep || activeMode ? 'red' : 'black'}`, height: '9px', width: '9px'}}></div>
            <p>{index+1}</p>
          </div>
        </button>
        {activeStep && <p><strong>O</strong></p>}
      </div>
    )
  }
}

export default Step