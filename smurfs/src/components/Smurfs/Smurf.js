import React, { Component } from 'react'
import { Icon } from 'react-materialize'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteSmurf } from '../../actions'

class Smurf extends Component {
  render() {
    const { name, age, height, id } = this.props.smurf
    const { deleteSmurf } = this.props

    return (
      <div className="smurf card">
        <div className="smurf-details">
          <h5 className="smurf-name">{name}</h5>
          <p className="smurf-age">Age: {age}</p>
          <p className="smurf-height">Height: {height}</p>
        </div>
        <div className="smurf-actions">
          <div onClick={e => deleteSmurf(id)}>
            <Icon small className="red-text delete">
              delete
            </Icon>
          </div>
          <div onClick={() => this.props.history.push(`/smurfs/${id}`)}>
            <Icon small className="blue-text edit">
              edit
            </Icon>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  deleteSmurf
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Smurf)
)
