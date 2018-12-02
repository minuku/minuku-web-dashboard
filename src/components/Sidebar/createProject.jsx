import React, { Component } from "react";
import ParentComponent from "./parentComponent";

class CreateNewProject extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  render() {
    const { open } = this.state;
    return (
      <ParentComponent
        toggleList={() => this.setState({ open: !open })}
        listopen={open}
        {...this.props}
      />
    );
  }
}

export default CreateNewProject;
