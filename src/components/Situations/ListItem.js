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
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({});

class SituationsListItem extends React.Component {
  state = { expand: false };

  render() {
    const { expand } = this.state;
    const { name, conditions, deleteSituation } = this.props;
    return (
      <React.Fragment>
        <ListItem button onClick={() => this.setState({ expand: !expand })}>
          <ListItemText primary={name} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit">
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={() => deleteSituation(name)}
            >
              <DeleteIcon />
            </IconButton>
            {expand ? (
              <IconButton
                aria-label="Expand Less"
                onClick={() => this.setState({ expand: false })}
              >
                <ExpandLess />
              </IconButton>
            ) : (
              <IconButton
                aria-label="Expand More"
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
                <ListItem button key={index}>
                  <ListItemAvatar>
                    <Avatar size="small">
                      <LocationOn />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText inset primary={condition.name} />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
              : null
            }
            <ListItem className="d-flex justify-content-end">
              <Button size="small" variant="contained" color="primary" aria-label="Add">
                Add Condition
              </Button>
            </ListItem>
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SituationsListItem)