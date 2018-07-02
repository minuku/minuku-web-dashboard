import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Grid from '@material-ui/core/Grid'

import { labelData } from './labelFormat.js'
import { DataSectionLabelCard } from 'components/Card'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: `100%`,
    zIndex: 1,
    overflow: 'scroll',
    position: 'relative',
    display: 'flex',
    flexDirection: `column`
  },
  barContainer: {
    boxShadow: `none`
  },
  bar: {
    [theme.breakpoints.down('sm')]: {
      height: 64
    },
  },
  sectionList: {
    padding: 20
  },
  section: {
    marginBottom: 32
  },
  sectionTitle: {
    marginBottom: 8
  },
  sectionContent: {
    overflowX: 'scroll'
  },
  labelBtn: {
    minHeight: 24,
    padding: `4px 16px 2px`,
    marginRight: 8,
    backgroundColor: `rgba(100, 100, 100, 0.25)`,
    color: `rgba(100, 100, 100, 0.95)`,
  }
})

class DataSection extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar  className={classes.barContainer} position="static" color="default">
          <Divider/>
          <Toolbar className={classes.bar}>
            <Typography variant="headline" color="inherit">
              Data Section 專案資料設定
            </Typography>
          </Toolbar>
          <Divider/>
        </AppBar>

        <div className={classes.sectionList}>

          <div className={classes.section}>
            <Grid container className={classes.sectionTitle} justify="flex-start" alignItems="center" pacing={4}>
              <Button className={classes.labelBtn}>
                data collection
              </Button>
              <Typography variant="headline">睡眠資料</Typography>
            </Grid>
            <Grid
              container
              className={classes.sectionContent}
              wrap="nowrap"
              justify="flex-start"
              spacing={16}>
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <DataSectionLabelCard
                    data={labelData}
                    cardTitle={value}/>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(DataSection)
