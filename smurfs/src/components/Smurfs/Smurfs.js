import React, { Component } from 'react'
import Smurf from './Smurf'
import { connect } from 'react-redux'
import { getSmurfs } from '../../actions'
import { Preloader } from 'react-materialize'

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    const { smurfs, fetchingSmurfs } = this.props

    if (fetchingSmurfs) {
      return (
        <div className="smurfs">
          <h4>Smurfs:</h4>
          <div className="pre-loader">
            <Preloader />
          </div>
        </div>
      )
    }

    return (
      <div className="smurfs">
        <h4>Smurfs:</h4>
        {smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

const mapDispatchToProps = {
  getSmurfs
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Smurfs)
