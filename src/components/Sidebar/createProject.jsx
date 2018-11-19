import React, { Component } from 'react'
import ParentComponent from './parentComponent'

class CreateNewProject extends Component {

  constructor(props){
    super(props)
    this.state = { items: [], open: true  }
  }

  render(){
    const { open, items } = this.state
    return(
      <ParentComponent
        toggleList={() => this.setState({ open: !open })}
        listopen={open}
        items={items}
      />
    )
  }
}

export default CreateNewProject