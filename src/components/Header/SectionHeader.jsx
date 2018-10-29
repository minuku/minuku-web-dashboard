import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const styles = theme => ({
  barContainer: {
    boxShadow: `none`
  },
  bar: {
    [theme.breakpoints.down("sm")]: {
      height: 64
    }
  },
});

const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  breakpoints,
  overrides: {
    MuiTypography: {
      headline: {
        fontSize: 20,
        [breakpoints.down("xs")]: {
          fontSize: 18
        }
      }
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
      <MuiThemeProvider theme={theme}>
        <Typography variant="headline" color="inherit" noWrap>
          { children }
        </Typography>
      </MuiThemeProvider>
    </Toolbar>
    <Divider />
  </AppBar>
)

export default withStyles(styles)(SectionHeader);
