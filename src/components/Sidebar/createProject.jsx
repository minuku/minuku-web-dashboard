import React, { Component } from 'react'
import ParentComponent from './ParentComponent'

class CreateNewProject extends Component {
  constructor(props){
    super(props)
    this.state = { items: [], open: true  }
  }

  appendItem = () => {
    const { items } = this.state
    this.setState({ items: [...items, { name: "New Project" } ] });
  };

  render(){
    const { open, items } = this.state
    return(
      <ParentComponent
        addItem={this.appendItem}
        toggleList={() => this.setState({ open: !open })}
        open={open}
        items={items}
      />
    )
  }
}

export default CreateNewProject