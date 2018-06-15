import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

export default class DialogComponent extends React.Component {
  state = {}

  handleClickOpen = () => {
    this.props.handleClickOpen()
  }

  handleClose = () => {
    this.props.handleClose()
  }
  render () {
    return (
      <Dialog
        open={this.props.isOpen}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {this.props.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            cancel
          </Button>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
