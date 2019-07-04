import React from 'react'

class Step extends React.Component {
  
  render() {
    const {onClick} = this.props
    return(
      <button onClick={onClick} style={{background: 'yellow', height: '40px', width: '20px'}}>
        <div style={{background: 'black', height: '9px', width: '9px'}}></div>

      </button>
    )
  }
}

export default Step