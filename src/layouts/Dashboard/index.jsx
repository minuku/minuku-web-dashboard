import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Header, Sidebar } from "components";
import SectionHeader from "components/Header/SectionHeader";


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "auto",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
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
    // padding: theme.spacing.unit * 3,

    marginTop: 64,
    [theme.breakpoints.down("sm")]: {
      marginTop: 56
    },
    overflow: "scroll"
  },
  container: {
    flex: 1,
    height: `100%`
  }
});

class Dashboard extends React.Component {
  state = {
    open: false
  };
  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };
  componentDidUpdate() {
    this.refs.mainPanel.scrollTop = 0;
  }
  render() {
    const { classes, children, title } = this.props;
    return (
      <div className={classes.root}>
        <Header
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.open}
        />

        <Sidebar
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.open}
        />

        <main className={classes.content} ref="mainPanel">
          <div className={classes.container}>
            <SectionHeader>{ title }</SectionHeader>
            {children}
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
