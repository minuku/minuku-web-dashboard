import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Header, Sidebar } from '../../components'
import Typography from '@material-ui/core/Typography'

const drawerWidth = 240

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
    padding: theme.spacing.unit * 3,
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
          drawerWidth={drawerWidth}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.open} />

        <Sidebar
          drawerWidth={drawerWidth}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.open} />

        <main className={classes.content} ref="mainPanel">
          <div className={classes.toolbar} />
          <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard)
