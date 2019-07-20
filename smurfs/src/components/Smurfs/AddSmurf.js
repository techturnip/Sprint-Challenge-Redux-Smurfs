import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addSmurf } from '../../actions'
import { TextInput, Button, Icon } from 'react-materialize'

class AddSmurf extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      height: '',
      age: ''
    }
  }

  onSubmit = e => {
    e.preventDefault()

    const { name, height, age } = this.state

    const newSmurf = {
      name,
      height,
      age
    }

    this.props
      .addSmurf(newSmurf)
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
            value={age}
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

const mapDispatchToProps = {
  addSmurf
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddSmurf)
)
