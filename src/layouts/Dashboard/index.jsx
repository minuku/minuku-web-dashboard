import React, { Component } from 'react';

export default class Dashboard extends Component {
  state = {
    mobileOpen: false
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }
  render () {
    return (
      <div>Dashboard_Test</div>
    )
  }
}
