import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import CreateNewProject from "./createProject";

const styles = (theme, drawerWidth = 240) => ({
  drawerPaper: {
    position: "fixed",
    whiteSpace: "nowrap",
    height: '100vh',
    [theme.breakpoints.down("xs")]: {
      width: 60
    },
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }
  handleDrawerToggle = () => {
    this.props.handleDrawerToggle();
  };
  render() {
    const { classes, theme, projects, addProject, deleteProject } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper)
        }}
        open={true}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={this.handleDrawerToggle}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <List>
          <CreateNewProject
            projects={projects}
            addProject={addProject}
            deleteProject={deleteProject}
          />
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar);
