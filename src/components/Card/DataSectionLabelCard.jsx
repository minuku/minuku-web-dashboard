import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import Card from '@material-ui/core/Card'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

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
    backgroundColor: theme.palette.secondary.main
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
  },
  formControl: {
    width: `25%`,
    margin: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      width: `100%`,
    },
    [theme.breakpoints.down('md')]: {
      width: `40%`,
    },
  },
  modalContent: {
    display: `flex`,
    flexWrap: `wrap`
  }
})

class DataSectionDialog extends React.Component {
  state = {
    open: false,
    _labelingData: null
  }
  toggleModal = () => {
    this.setState({open: !this.state.open})
  }
  handleChange = ({sectionId, labelId}) => event => {
    let _data = this.state._labelingData
    _data[sectionId][labelId][`active`] = !_data[sectionId][labelId][`active`]
    this.setState({ _labelingData: _data })
  }

  componentDidMount () {
    let _labelingData = {}
    _.map(this.props.data, (sec, secId) => {
      _labelingData[secId] = {}
      _.map(sec, (type, id) => {
        _labelingData[secId][id] = {
          active: false,
          value: null,
          type: type
        }
      })
    })
    this.setState({_labelingData: _labelingData})
  }
  render () {
    const { classes } = this.props
    return (
      <Card className={classes.paper}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.cardTitle.slice(0, 1)}
            </Avatar>
          }
          action={
            <IconButton className={classes.sectionActionBtn} onClick={this.toggleModal}>
              <EditIcon />
            </IconButton>
          }
          title={this.props.cardTitle}
          // subheader="21 labels"
        />
        <Divider light />

        <Dialog
          maxWidth="md"
          open={this.state.open}
          onClose={this.toggleModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Label Selection: Phone</DialogTitle>
          <DialogContent className={classes.modalContent}>
            {
              _.map(this.state._labelingData, (section, sectionId) =>
              <FormControl key={sectionId} component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">{sectionId}</FormLabel>
                <FormGroup>
                  {
                    _.map(section, (label, labelId) =>
                      <FormControlLabel
                        key={labelId}
                        control={
                          <Checkbox
                            checked={label.active}
                            onChange={this.handleChange({sectionId, labelId})}
                            value={labelId}
                          />
                        }
                        label={labelId}
                      />
                    )
                  }
                </FormGroup>
              </FormControl>
              )
            }
          </DialogContent>

          <DialogActions>
            <Button onClick={this.toggleModal} color="primary">
              close
            </Button>
            <Button onClick={this.toggleModal} color="primary" autoFocus>
              update
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    )
  }
}

export default withStyles(styles)(DataSectionDialog)
