import React, { Component } from "react";

import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import ChildrenComponent from "./childrenComponent";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  iconButton: {
    width: theme.spacing.unit * 3,
    height: theme.spacing.unit * 3
  }
});

class ParentComponent extends Component {
  state = {
    open: false,
    description: {
      title: ""
    }
  };

  handleToggle = () => {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = title => ({ target: { value } }) => {
    const { description } = this.state;
    this.setState({
      description: {
        ...description,
        [title]: value
      }
    });
  };

  handleSubmit = () => {
    const { description } = this.state;
    const { addProject } = this.props;
    addProject(description.title);
    this.setState({
      open: false,
      description: {
        title: ""
      }
    });
  };

  handleDelete = name => {
    const { deleteProject } = this.props;
    deleteProject(name);
  };

  render() {
    const {
      open,
      description: { title }
    } = this.state;
    const { classes, toggleList, listopen, projects } = this.props;

    return (
      <div className="card calculator">
        <ListItem button>
          <ListItemIcon>
            <LinearScaleIcon />
          </ListItemIcon>
          <ListItemText inset primary="Project List" />
          <ListItemSecondaryAction className="mr-1">
            <IconButton className={classes.iconButton}>
              <AddIcon onClick={this.handleToggle} color="primary" />
            </IconButton>
            {listopen ? (
              <IconButton className={classes.iconButton} onClick={toggleList}>
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton className={classes.iconButton} onClick={toggleList}>
                <ExpandMoreIcon />
              </IconButton>
            )}
          </ListItemSecondaryAction>
          <Dialog
            open={open}
            onClose={this.handleToggle}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Create a new project
            </DialogTitle>
            <DialogContent>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange("title")}
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="raised"
                onClick={this.handleSubmit}
                autoFocus
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </ListItem>
        {listopen && projects && projects.length
          ? projects.map((project, id) => (
              <ChildrenComponent
                onDelete={this.handleDelete}
                name={project}
                key={id}
              />
            ))
          : null}
      </div>
    );
  }
}

export default withStyles(styles)(ParentComponent);
