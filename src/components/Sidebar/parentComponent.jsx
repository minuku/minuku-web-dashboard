import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinearScaleIcon from "@material-ui/icons/LinearScale";

import ChildrenComponent from './ChildrenComponent'

const ParentComponent = ({ addItem, toggleList, open, items }) => (
  <div className="card calculator">
    <ListItem button>
      <ListItemIcon>
        <LinearScaleIcon />
      </ListItemIcon>
      <ListItemText primary="Project List" />
      <Typography color="textSecondary">
        <AddIcon onClick={addItem} />
        <span onClick={toggleList}>
          {
            open
              ? <ExpandLessIcon />
              : <ExpandMoreIcon />
          }
        </span>
      </Typography>

    </ListItem>
    {

      open && items && items.length
        ? items.map((item, id) => <ChildrenComponent {...item} key={id}/>)
        : null
    }
  </div>
);

export default ParentComponent
