import React, { Fragment } from 'react'
import { NavLink } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import SettingsIcon from '@material-ui/icons/Settings';
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
    const { classes, name } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <ListItem button onClick={this.handleClick} className="pl-5">
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText 
            inset 
            primary={name} 
            />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={NavLink} to="/dashboard/condition">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText inset primary="Condition" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={NavLink} to="/dashboard/questionnaire">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText inset primary="Questionnaire" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={NavLink} to="/dashboard/data">
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
              <ListItemText inset primary="Data Collection" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={NavLink} to="/dashboard/monitor">
              <ListItemIcon>
                <SettingsIcon />
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
