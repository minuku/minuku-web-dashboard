import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import InboxIcon from "@material-ui/icons/Inbox";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import ViewListIcon from "@material-ui/icons/ViewList";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";

const ListItems = (
  <div>
    <ListItem button component={NavLink} to="/dashboard/profile">
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button component={NavLink} to="/dashboard/projects">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Project List" />
    </ListItem>
    <ListItem button component={NavLink} to="/dashboard/condition">
      <ListItemIcon>
        <LinearScaleIcon />
      </ListItemIcon>
      <ListItemText primary="Condition" />
    </ListItem>
    <ListItem button component={NavLink} to="/dashboard/questionnaire">
      <ListItemIcon>
        <FormatAlignLeftIcon />
      </ListItemIcon>
      <ListItemText primary="Questionnaire" />
    </ListItem>
    <ListItem button component={NavLink} to="/dashboard/data">
      <ListItemIcon>
        <ViewListIcon />
      </ListItemIcon>
      <ListItemText primary="Data Collection" />
    </ListItem>
    <ListItem button component={NavLink} to="/dashboard/monitor">
      <ListItemIcon>
        <PersonalVideoIcon />
      </ListItemIcon>
      <ListItemText primary="My Data" />
    </ListItem>
  </div>
);
export default ListItems;

