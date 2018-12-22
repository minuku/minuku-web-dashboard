import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

const styles = theme => ({});

class EditDialog extends React.Component {
  state = { name: "" };
  createAndClose = () => {
    const { addSituation, onClose } = this.props;
    const { name } = this.state;
    addSituation(name);
    onClose();
  };
  render() {
    const { open, onClose } = this.props;
    const { name } = this.state;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Create a new Situation</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="raised"
            onClick={this.createAndClose}
            autoFocus
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(EditDialog)