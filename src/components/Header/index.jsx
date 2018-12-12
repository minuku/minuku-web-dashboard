import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import { Link } from 'react-router-dom'

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Button from "@material-ui/core/Button";

const styles = (theme, drawerWidth = 240) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: 180,
      width: `calc(100% - 180px)`
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
    marginLeft: -70,
    flexGrow: 1
  },
  loginButtonText: {
    marginLeft: 1 * theme.spacing.unit,
    color: 'white',
    textDecoration: 'none',
  }
});

class AppBarComponent extends React.Component {
  state = { user: null };
  handleDrawerToggle = () => {
    this.props.handleDrawerToggle();
  };
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }
  render() {
    const { classes, user } = this.props;
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
            className={classNames(classes.menuButton)}
          />
          <Typography
            variant="title"
            color="inherit"
            className={classes.title}
            noWrap
          >
            Minuku Project
          </Typography>
          {user && user.username ? (
            <Button color="inherit" className="mr-2">
              <AccountBoxIcon />
              <Link className={classes.loginButtonText} to="/dashboard/profile">
                { user.username }
              </Link>
            </Button>
          ) : (
            <Button color="inherit" className="mr-2">
              <AccountBoxIcon />
              <Link className={classes.loginButtonText} to="/login">
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AppBarComponent);
