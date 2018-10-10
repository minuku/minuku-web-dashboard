import React from "react";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import { streamGenerator } from "./streamGenerator.js";
import purple from "@material-ui/core/colors/purple";

const styles = theme => ({
  cssRoot: {
    color: theme.palette.getContrastText(purple[700]),
    backgroundColor: purple[700],
    "&:hover": {
      backgroundColor: purple[900]
    }
  }
});

class DropDown extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
          select
          value={this.props.menuValue[0]}
          className={classes.textField}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
          onChange={e => this.props.handleChange(0, this.props.ruleIndex, e)}
        >
          {streamGenerator["transportation"]["menu"].map(option => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

export default withStyles(styles)(DropDown);
