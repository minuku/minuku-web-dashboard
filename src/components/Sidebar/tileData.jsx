import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import InboxIcon from "@material-ui/icons/Inbox";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import DomainIcon from "@material-ui/icons/Domain";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import ViewListIcon from "@material-ui/icons/ViewList";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";

export const mailFolderListItems = (
  <div>
    <ListItem button component={NavLink} to="/dashboard/profile">
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="profile" />
    </ListItem>

    <ListItem button component={NavLink} to="/dashboard/project">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Project List" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button component={NavLink} to="/dashboard/condition">
      <ListItemIcon>
        <LinearScaleIcon />
      </ListItemIcon>
      <ListItemText primary="Condition" />
    </ListItem>
    <ListItem button component={NavLink} to="/dashboard/situation">
      <ListItemIcon>
        <DomainIcon />
      </ListItemIcon>
      <ListItemText primary="Situation" />
    </ListItem>
    <ListItem button component={NavLink} to="/dashboard/questionnaire">
      <ListItemIcon>
        <FormatAlignLeftIcon />
      </ListItemIcon>
      <ListItemText primary="Questionnaire" />
    </ListItem>
    <ListItem button component={NavLink} to="/dashboard/schedule">
      <ListItemIcon>
        <DateRangeIcon />
      </ListItemIcon>
      <ListItemText primary="Schedule" />
    </ListItem>
    <ListItem button component={NavLink} to="/dashboard/data">
      <ListItemIcon>
        <ViewListIcon />
      </ListItemIcon>
      <ListItemText primary="Data" />
    </ListItem>
    <ListItem button component={NavLink} to="/dashboard/monitor">
      <ListItemIcon>
        <PersonalVideoIcon />
      </ListItemIcon>
      <ListItemText primary="Monitor" />
    </ListItem>
  </div>
);
