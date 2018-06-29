import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import red from '@material-ui/core/colors/red'

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
  sectionActionBtn: {
    width: 36,
    height: 36,
    marginTop: 4,
    marginRight: 6
  },
  paper: {
    height: 200,
    width: 360,
  },
  avatar: {
    backgroundColor: red[200],
  },
  header: {
    padding: `6px 12px`
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
                  <Card className={classes.paper}>
                    <CardHeader
                      className={classes.header}
                      avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                          P
                        </Avatar>
                      }
                      action={
                        <IconButton className={classes.sectionActionBtn}>
                          <EditIcon />
                        </IconButton>
                      }
                      title="Phone"
                      subheader="21 labels"
                    />
                    <Divider light />
                  </Card>
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
