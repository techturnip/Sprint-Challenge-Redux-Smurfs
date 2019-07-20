import React, { Component } from 'react'
import { Icon } from 'react-materialize'

class Smurf extends Component {
  render() {
    const { name, age, height } = this.props.smurf

    return (
      <div className="smurf card">
        <div className="smurf-details">
          <h5 className="smurf-name">{name}</h5>
          <p className="smurf-age">Age: {age}</p>
          <p className="smurf-height">Height: {height}</p>
        </div>
        <div className="smurf-actions">
          <Icon small className="red-text delete">
            delete
          </Icon>
          <Icon small className="blue-text edit">
            edit
          </Icon>
        </div>
      </div>
    )
  }
}

export default Smurf
