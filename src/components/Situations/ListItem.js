import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";

import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import LocationOn from "@material-ui/icons/LocationOn";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import ConditionDialog from './ConditionDialog'

const styles = theme => ({
  iconButton: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const Condition = withStyles(styles)(({ condition, classes, deleteCondition, editCondition }) => (
  <ListItem button className={classes.nested}>
    <ListItemAvatar>
      <Avatar size="small">
        <LocationOn />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      inset
      primary={condition.conditionName}
    />
    <ListItemSecondaryAction>
      <IconButton
        aria-label="Edit"
        className={classes.iconButton}
        onClick={() => editCondition(condition)}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        aria-label="Delete"
        className={classes.iconButton}
        onClick={() => deleteCondition(condition.conditionName)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
))

class SituationsListItem extends React.Component {
  state = {
    expand: false,
    condition: {
      editing: false,
      item: null,
      isNew: false,
    }
  };
  newCondition = () => {
    this.setState({ condition: { editing: true, item: {}, isNew: true }})
  }

  setEditingCondition = item => {
    this.setState({ condition: { editing: true, item, isNew: false  }})
  }

  cancelEditingCondition = () => {
    this.setState({ condition: { editing: false, item: null, isNew: false }})
  }

  saveCondition = (payload) => {
    const { projectName, addCondition, situationName, updateCondition } = this.props
    const { condition } = this.state
    if(condition.isNew){
      addCondition(projectName, situationName, payload)
    }
    else{
      updateCondition(projectName, situationName, condition.item.conditionName, payload)
    }
    this.cancelEditingCondition()
  }

  deleteCondition = conditionName => {
    const { projectName, situationName, deleteCondition } = this.props
    deleteCondition(projectName, situationName, conditionName)
  }

  render() {
    const { expand, condition } = this.state;
    const { situationName, conditions, classes, deleteSituation, editSituation, projectName } = this.props;
    return (
      <React.Fragment>
        <ListItem button onClick={() => this.setState({ expand: !expand })}>
          <ListItemText primary={situationName} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Edit"
              className={classes.iconButton}
              onClick={() => editSituation(situationName)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete"
              className={classes.iconButton}
              onClick={() => deleteSituation(projectName, situationName)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="Add"
              className={classes.iconButton}
              onClick={() => this.newCondition()}
            >
              <AddIcon />
            </IconButton>
            {expand ? (
              <IconButton
                aria-label="Expand Less"
                className={classes.iconButton}
                onClick={() => this.setState({ expand: false })}
              >
                <ExpandLess />
              </IconButton>
            ) : (
              <IconButton
                aria-label="Expand More"
                className={classes.iconButton}
                onClick={() => this.setState({ expand: true })}
              >
                <ExpandMore />
              </IconButton>
            )}
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            { conditions && conditions.length
              ? conditions.map((condition, index) =>
                  <Condition
                    key={index}
                    condition={condition}
                    deleteCondition={this.deleteCondition}
                    editCondition={this.setEditingCondition}
                  />
                )
              : <ListItem>
                  <ListItemText secondary="No condition under this situation yet." />
                </ListItem>
            }
          </List>
        </Collapse>
        <ConditionDialog
          isOpen={condition.editing}
          handleCancel={this.cancelEditingCondition}
          handleSave={this.saveCondition}
          isNew={condition.isNew}
          value={condition.item}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SituationsListItem)