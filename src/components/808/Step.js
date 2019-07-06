import React from 'react'

class Step extends React.Component {
  
  render() {
    const { onClick, activeStep, index } = this.props
    return(
      <div>
      <button onClick={onClick} style={{background: 'yellow', height: '40px', width: '20px'}}>
        <div style={{background: `${activeStep ? 'red' : 'black'}`, height: '9px', width: '9px'}}></div>
      </button>
        <p>{index+1}</p>
      </div>
    )
  }
}

export default Step