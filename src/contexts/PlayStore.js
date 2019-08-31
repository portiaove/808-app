import React from 'react'

const PlayContext = React.createContext()

class PlayStore extends React.Component {

  state = {
    playing: null
  }

  togglePlay = (id) => {
    const {playing} = this.state
    this.setState({playing: id})
  }
  render() {
    return(
      <PlayContext.Provider value={{
        playing: this.state.playing,
        togglePlay: this.togglePlay
      }}>
      {this.props.children}
      </PlayContext.Provider>
    )
  }
}

const withPlayContext = (WrappedComponent) => {
  return (props) => {
    return (
      <PlayContext.Consumer>
        {(consumerProps) => (<WrappedComponent {...consumerProps} {...props}/>)}
      </PlayContext.Consumer>
    )
  }
}

export {PlayStore, withPlayContext}