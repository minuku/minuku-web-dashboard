import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  content: {
    position: "absolute",
    right: "0",
    top: "0",
    width: "75%",
    height: "100vh",
    borderLeft: "1px solid black",
    padding: "5%"
  },
  textField: {
    width: 200
  },
  title: {
    marginBottom: 0
  }
});

class Account extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content} id="account">
        <h1>Account</h1>
        <h3 className={classes.title}>Email Address</h3>
        <TextField label="Edit Email Address" className={classes.textField} />
        <h3 className={classes.title}>User Name</h3>
        <TextField label="Edit User Name" className={classes.textField} />
        <h3 className={classes.title}>Change Password</h3>
        <TextField label="Change PW" className={classes.textField} />
        <h3>Join a group</h3>
      </div>
    );
  }
}

export default withStyles(styles)(Account);
