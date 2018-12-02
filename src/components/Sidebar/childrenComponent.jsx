import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 7
  },
  delete: {
    marginRight: 10
  }
});

class ChildComponent extends React.Component {
  state = {
    open: false,
    isOpen: false
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleOpen = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  handleDelete = () => {
    const { onDelete, id, name } = this.props;
    this.setState(state => ({ open: !state.open }));
    onDelete(name);
  };

  render() {
    const { classes, name } = this.props;
    const { open, isOpen } = this.state;
    const urlPrefix = `/dashboard/project/${name}`;

    return (
      <Fragment>
        <ListItem button onClick={this.handleOpen} className="pl-5">
          <ListItemIcon>
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
          <ListItemText inset primary={name} />
          <ListItemSecondaryAction>
            <IconButton className={classes.delete}>
              <Delete onClick={this.handleClick} />
            </IconButton>
            <Dialog open={open} onClose={this.handleClick}>
              <DialogContent>
                <DialogContentText>
                  Are you sure to delete this project?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClick} color="primary">
                  No
                </Button>
                <Button onClick={this.handleDelete} color="primary" autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              to={`${urlPrefix}/condition`}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText inset primary="Condition" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              to={`${urlPrefix}/questionnaire`}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText inset primary="Questionnaire" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              to={`${urlPrefix}/data`}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText inset primary="Data Collection" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              to={`${urlPrefix}/monitor`}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText inset primary="My Data" />
            </ListItem>
          </List>
        </Collapse>
      </Fragment>
    );
  }
}

export default withStyles(styles)(ChildComponent);
