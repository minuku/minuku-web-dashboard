import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField'

import { datatype } from './dataType.js'
import { mobileLabelData } from './labelFormat.js'
import { DataSectionLabelCard } from 'components/Card'
import SectionHeader from 'components/Header/SectionHeader'
import Dialog from 'components/Dialog'

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
  addCardButton: {
    height: 36,
    backgroundColor: theme.palette.secondary.main,
    margin: `0 16px`,
    padding: `4px 16px`
  },
  addSectionWrapper: {
    marginTop: 100
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
      }
    ],
    name: ``,
    sectionId: 0,
    type: `collection`,
    isDialogShow: false
  }
  addCard = (id, title) => {
    console.log(id)
    let list = this.state.list
    list[id].content.push({
      cardTitle: title,
      type: `wearable`
    })
    this.setState({list})
  }

  deleteCard = (sectionId, cardId) => {
    let list = this.state.list
    list[sectionId].content.splice(cardId, 1)
    this.setState({list})
  }

  addCollection = (title) => {
    let list = this.state.list
    list.push({
      title: title,
      type: datatype[0],
      content: []
    })
    this.setState({list})
  }

  deleteCollection = (collectionId) => {
    let list = this.state.list
    list.splice(collectionId, 1)
    this.setState({list})
  }

  toggleDialog = (id = null, type = `collection`) => {
    this.setState({
      sectionId: id,
      type: type,
      isDialogShow: !this.state.isDialogShow
    })
  }

  createElement = (type = this.state.type) => {
    type === `collection` ? (
      this.addCollection(this.state.name)
    ) : (
      this.addCard(this.state.sectionId, this.state.name)
    )
    this.setState({ name: `` })
    this.toggleDialog()
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <SectionHeader title={`Data Section 專案資料設定`} />

        <div className={classes.sectionList}>
          {
            _.map(this.state.list, (section, sid) =>
              <div className={classes.section} key={sid}>
                <Grid container className={classes.sectionTitle} justify="flex-start" alignItems="center" pacing={4}>
                  <Button className={classes.labelBtn}>
                    {section.type}
                  </Button>
                  <Typography variant="headline">{section.title}</Typography>
                  <IconButton onClick={() => this.deleteCollection(sid)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
                <Grid container spacing={16} wrap="nowrap" justify="flex-start" className={classes.sectionContent}>
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
                    <Button variant="contained" color="secondary" className={classes.addCardButton} onClick={() => this.toggleDialog(sid, `card`)}>
                      <AddIcon className={classes.addButtonIcon} />
                      Device
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )
          }

          <Grid container justify={'center'} className={classes.addSectionWrapper}>
            <Button variant="contained" color="primary" className={classes.addSectionButton} onClick={() => this.toggleDialog(`collection`)}>
              <AddIcon className={classes.addButtonIcon} />
              add collection
            </Button>
          </Grid>

        </div>

        <Dialog
          isOpen={this.state.isDialogShow}
          title={`New ${this.state.type} Setting`}
          content={<TextField
            id="name"
            label="Name"
            className={this.props.classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />}
          handleSubmit={this.createElement}
          handleClose={this.toggleDialog}
        />

      </div>
    )
  }
}

export default withStyles(styles)(DataSection)
