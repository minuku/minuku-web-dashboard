import React, { Component } from 'react'
import ParentComponent from './parentComponent'
import ChildComponent from './childrenComponent'

class CreateNewProject extends Component {

  state = {
    num: 0
  };

  appendChild = () => {
    this.setState({
      num: this.state.num + 1
    });
  };

  render(){
    const children = [];
    for (var i = 0; i < this.state.num; i += 1) {
      children.push(<ChildComponent key={i} number={i} />);
    }
    return(
      <ParentComponent addChild={this.appendChild}>{children}</ParentComponent>
    )
  }
}

export default CreateNewProject