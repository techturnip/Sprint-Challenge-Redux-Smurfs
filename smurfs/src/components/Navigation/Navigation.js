import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import { Link, withRouter } from 'react-router-dom'

function Navigation(props) {
  return (
    <Navbar
      className="navigation blue"
      brand={<Link to="/">Smurfs! 2.0</Link>}
      alignLinks="right"
    >
      <NavItem onClick={() => props.history.push('/add')}>
        <Icon left>add</Icon>Add Smurf
      </NavItem>
      <NavItem onClick={() => props.history.push('/')}>
        <Icon left>list</Icon>View Smurfs
      </NavItem>
    </Navbar>
  )
}

export default withRouter(Navigation)
