import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add'

import { datatype } from './dataType.js'
import { mobileLabelData } from './labelFormat.js'
import { DataSectionLabelCard } from 'components/Card'

import _ from 'lodash'

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
    overflowX: 'scroll',
    alignItems: 'center'
  },
  labelBtn: {
    minHeight: 24,
    padding: `4px 16px 2px`,
    marginRight: 8,
    backgroundColor: `rgba(100, 100, 100, 0.25)`,
    color: `rgba(100, 100, 100, 0.95)`,
  },
  addButton: {
    height: 36,
    backgroundColor: theme.palette.secondary.main,
    margin: `0 16px`,
    padding: `4px 16px`
  }
})

class DataSection extends React.Component {
  state = {
    list: [
      {
        title: `睡眠資料`,
        type: datatype[0],
        content: [
          {
            cardTitle: `mobile`,
            type: `mobile`
          },
          {
            cardTitle: `wearable`,
            type: `wearable`
          }
        ]
      },
      {
        title: `運動資料`,
        type: datatype[1],
        content: [
          {
            cardTitle: `mobile`,
            type: `mobile`
          },
          {
            cardTitle: `wearable`,
            type: `wearable`
          }
        ]
      }
    ]
  }
  addCard = (id) => {
    let list = this.state.list
    list[id].content.push({
      cardTitle: `wearable`,
      type: `wearable`
    })
    this.setState({list})
  }

  deleteCard = (sectionId, cardId) => {
    let list = this.state.list
    list[sectionId].content.splice(cardId, 1)
    this.setState({list})
  }
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

          {
            _.map(this.state.list, (section, sid) =>
              <div className={classes.section} key={sid}>
                <Grid container className={classes.sectionTitle} justify="flex-start" alignItems="center" pacing={4}>
                  <Button className={classes.labelBtn}>
                    {section.type}
                  </Button>
                  <Typography variant="headline">{section.title}</Typography>
                </Grid>
                <Grid
                  container
                  spacing={16}
                  wrap="nowrap"
                  justify="flex-start"
                  className={classes.sectionContent}>
                  {
                    _.map(section.content, (card, cid) =>
                      <Grid key={cid} item>
                        <DataSectionLabelCard
                          data={mobileLabelData}
                          deleteCard={() => this.deleteCard(sid, cid)}
                          cardTitle={card.cardTitle}/>
                      </Grid>
                    )
                  }
                  <Grid item>
                    <Button variant="contained" color="secondary" className={classes.addButton} onClick={() => this.addCard(sid)}>
                      <AddIcon className={classes.addButtonIcon} />
                      Device
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )
          }

        </div>
      </div>
    )
  }
}

export default withStyles(styles)(DataSection)
