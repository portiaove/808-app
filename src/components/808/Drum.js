import React from 'react'
import './808.css'

class Drum extends React.Component {

  render() {
    const { activeDrum, name, onClick, title } = this.props
    console.log('Drum Render')
  return(
    <div className="Instrument">
      <div className="mb-2" style={{background: `${(activeDrum === name) ? 'red' : 'black'}`, width: "30px", height: "5px"}}></div>
      <div>
        <button name={name} onClick={onClick}>{title}</button>
      </div>
    </div>
  )
}
}

export default Drum