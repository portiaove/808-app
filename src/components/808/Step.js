import React from 'react'

class Step extends React.Component {

  // handleStyle = () => {
  //   const {activeStep, index, counter } = this.props 
  //   if (index === counter || activeStep) {
  //     return 'red'
  //   } else {
  //     return 'black'
  //   }
  // }
  
  render() {
    const { onClick, activeStep, index, counter } = this.props
    return(
      <div>
      <button onClick={onClick} style={{background: 'yellow', height: '40px', width: '20px'}}>
        <div style={{background: `${index === counter || activeStep ? 'red' : 'black'}`, height: '9px', width: '9px'}}></div>
      </button>
        <p>{index+1}</p>
      </div>
    )
  }
}

export default Step