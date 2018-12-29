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

const styles = theme => ({
  iconButton: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  }
});

class SituationsListItem extends React.Component {
  state = { expand: false };

  render() {
    const { expand } = this.state;
    const { situationName, conditions, classes, deleteSituation } = this.props;
    return (
      <React.Fragment>
        <ListItem button onClick={() => this.setState({ expand: !expand })}>
          <ListItemText primary={situationName} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Edit"
              className={classes.iconButton}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete"
              className={classes.iconButton}
              onClick={() => deleteSituation(situationName)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="Add"
              className={classes.iconButton}
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
              ? conditions.map((condition, index) => (
                <ListItem button key={index} className={classes.nested}>
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
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Delete"
                      className={classes.iconButton}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
              : null
            }
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SituationsListItem)