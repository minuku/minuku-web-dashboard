import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import CreateNewProject from './createProject'

class ListItems extends React.Component{
  render() {
    return(
      <div>
        <ListItem button component={NavLink} to="/dashboard/profile">
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <CreateNewProject />
      </div>
    )
  }
}

export default ListItems;
