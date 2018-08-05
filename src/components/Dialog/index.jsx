import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

export default class DialogComponent extends React.Component {
  state = {};

  handleClose = () => {
    this.props.handleClose();
  };
  handleSubmit = () => {
    this.props.handleSubmit();
  };
  render() {
    return (
      <Dialog
        maxWidth="md"
        open={this.props.isOpen}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
        <DialogContent>{this.props.content}</DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary" autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
