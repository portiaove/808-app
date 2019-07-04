import React from 'react'

class Drum extends React.Component {

  render() {
    const { activeDrum, name, onClick, title } = this.props
  return(
    <div className="mr-2">
      <div className="mb-2" style={{background: `${(activeDrum === name) ? 'red' : 'black'}`, width: "30px", height: "5px"}}></div>
      <div><button 
      name={name} 
      onClick={onClick}
      >
       {title}
      </button>
      </div>
    </div>
  )
}
}

export default Drum