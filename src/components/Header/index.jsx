import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const styles = (theme, drawerWidth = 240) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    [theme.breakpoints.down("xs")]:{
      marginLeft: 180,
      width: `calc(100% - 180px)`,
    },
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  title: {
    marginLeft: -70
  }
});

class AppBarComponent extends React.Component {
  handleDrawerToggle = () => {
    this.props.handleDrawerToggle();
  };
  render() {
    const { classes } = this.props;
    const open = false;
    return (
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerToggle}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.title} noWrap>
            Minuku Project
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AppBarComponent);
