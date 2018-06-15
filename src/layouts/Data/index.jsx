import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 'auto',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  bar: {}
})

class DataSection extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar className={classes.bar} position="static" color="default">
          <Divider/>
          <Toolbar>
            <Typography variant="headline" color="inherit">
              Data Section 專案資料設定
            </Typography>
          </Toolbar>
          <Divider/>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(DataSection)
