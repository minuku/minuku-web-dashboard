import React, { Component } from 'react'
import { Sidebar } from 'components'
import styled from 'styled-components'

const Wrapper = styled.div`

`
export default class Dashboard extends Component {
  state = {
    mobileOpen: false
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }
  componentDidUpdate() {
    this.refs.mainPanel.scrollTop = 0;
  }
  render () {
    return (
      <Wrapper>

      </Wrapper>
    )
  }
}
