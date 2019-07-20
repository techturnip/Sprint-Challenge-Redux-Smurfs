import React, { Component } from 'react'
// Styling imports
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
// Component imports
import Navigation from './Navigation/Navigation'
import { Route } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    M.AutoInit()
  }

  render() {
    return (
      <div className="App container">
        <Navigation />
      </div>
    )
  }
}

export default App
