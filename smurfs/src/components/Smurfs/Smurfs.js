import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../../actions'
import { Preloader } from 'react-materialize'

class Smurfs extends Component {
  componentDidMount() {
    // dispatch here
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
