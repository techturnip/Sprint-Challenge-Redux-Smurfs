import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateSmurf } from '../../actions'
import { TextInput, Button, Icon } from 'react-materialize'

class UpdateSmurf extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      name: '',
      height: '',
      age: ''
    }
  }

  componentDidMount() {
    if (!this.props.smurfs.length) {
      this.props.history.push('/')
    } else {
      const id = Number(this.props.match.params.id)
      const smurf = this.props.smurfs.find(smurf => smurf.id === id)

      this.setState({
        id,
        name: smurf.name,
        height: smurf.height,
        age: smurf.age
      })
    }
  }

  onSubmit = e => {
    e.preventDefault()

    const { id, name, height, age } = this.state

    const updatedSmurf = {
      id,
      name,
      height,
      age
    }

    this.props
      .updateSmurf(updatedSmurf)
      .then(() => this.props.history.push('/'))
      .catch(err => console.error(err))
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { name, height, age } = this.state
    return (
      <div className="add-smurf card">
        <h4>Add a Smurf to the village:</h4>

        <form onSubmit={this.onSubmit}>
          <TextInput
            type="text"
            name="name"
            label="Name"
            value={name}
            onChange={this.onChange}
          />
          <TextInput
            type="number"
            name="age"
            label="Age"
            value={`${age}`}
            onChange={this.onChange}
          />
          <TextInput
            type="text"
            name="height"
            label="Height"
            value={height}
            onChange={this.onChange}
          />
          <Button className="blue" large>
            Submit <Icon right>send</Icon>
          </Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

const mapDispatchToProps = {
  updateSmurf
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UpdateSmurf)
)
