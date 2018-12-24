import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Checkbox from "@material-ui/core/Checkbox";

const styles = {
  content: {
    position: "absolute",
    left: "15%",
    top: "200%",
    width: "60%",
    height: "100vh",
    padding: "10%"
  }
};
class Notification extends React.Component {
  state = {
    checkedA: false,
    checkedB: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content} id="notification">
        <h1>Notification</h1>
        <div>
          <Checkbox
            checked={this.state.checkedA}
            onChange={this.handleChange("checkedA")}
          />
          <label>Email me when a project is finished</label>
        </div>
        <div>
          <Checkbox
            checked={this.state.checkedB}
            onChange={this.handleChange("checkedB")}
          />
          <label>Email me when I join a new project</label>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Notification);
