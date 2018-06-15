import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { withStyles } from '@material-ui/core/styles'
import dashboardRoutes from 'routes/dashboard.js'

import { Header, Sidebar } from 'components'

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />
      return <Route path={prop.path} component={prop.component} key={key} />
    })}
  </Switch>
)
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 'auto',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing.unit * 3,

    marginTop: 64
  }
})

class Dashboard extends React.Component {
  state = {
    open: false
  }
  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open })
  }
  componentDidUpdate () {
    this.refs.mainPanel.scrollTop = 0
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.open} />

        <Sidebar
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.open} />

        <main className={classes.content} ref="mainPanel">
          {/* <div className={classes.toolbar} /> */}
          <div className={classes.container}>{switchRoutes}</div>
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard)
