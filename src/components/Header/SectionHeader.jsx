import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  barContainer: {
    boxShadow: `none`
  },
  bar: {
    [theme.breakpoints.down("sm")]: {
      height: 64
    }
  }
});

const SectionHeader = ({ classes, children }) => (
  <AppBar
    className={classes.barContainer}
    position="static"
    color="default"
  >
    <Divider />
    <Toolbar className={classes.bar}>
      <Typography variant="headline" color="inherit">
        { children }
      </Typography>
    </Toolbar>
    <Divider />
  </AppBar>
)

export default withStyles(styles)(SectionHeader);
