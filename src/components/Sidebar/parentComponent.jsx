import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from "react-router-dom";
import LinearScaleIcon from "@material-ui/icons/LinearScale";

const ParentComponent = props => (
  <div className="card calculator">
    <ListItem button component={NavLink} to="/dashboard">
      <ListItemIcon>
        <LinearScaleIcon />
      </ListItemIcon>
      <ListItemText primary="Project List" />
      <Button variant="fab" color="primary" onClick={props.addChild} mini>
        <AddIcon />
      </Button>
    </ListItem>
   {props.children}
  </div>
);

export default ParentComponent





