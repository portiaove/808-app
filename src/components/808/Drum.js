import React from 'react'

class Drum extends React.Component {

  render() {
    const { activeDrum, name, onClick } = this.props
  return(
    <div>
      <div style={{background: `${(activeDrum === name) ? 'red' : 'black'}`, width: "15px", height: "15px"}}></div>
      <button 
      name={name} 
      onClick={onClick}
      >
       {name}
      </button>
    </div>
  )
}
}

export default Drum