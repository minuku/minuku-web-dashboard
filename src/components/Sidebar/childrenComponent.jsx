import React, { Fragment } from 'react'
import { NavLink } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 7,
  },
})

class ChildComponent extends React.Component {

  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <ListItem button onClick={this.handleClick} className="pl-5">
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary={"Project " + this.props.number} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={NavLink} to="/dashboard/condition">
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Condition" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={NavLink} to="/dashboard/questionnaire">
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Questionnaire" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={NavLink} to="/dashboard/data">
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
              <ListItemText inset primary="Data Collection" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={NavLink} to="/dashboard/monitor">
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="My Data" />
            </ListItem>
          </List>
        </Collapse>
      </Fragment>
    )
  }
}

export default withStyles(styles)(ChildComponent);

