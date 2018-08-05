import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import purple from '@material-ui/core/colors/purple';

import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  cssRoot: {
    color: theme.palette.getContrastText(purple[700]),
    backgroundColor: purple[700],
    '&:hover': {
      backgroundColor: purple[900],
    },
  },
  
});

const streamGenMenu = ['transportation', 'accelerometer', 'rotation', 'gravity', 'gyroscope', 'light', 'magnetic', 'pressure', 'proximity', 'temperature', 'humidity',];

class Rule extends React.Component{
  
  handleParaChange = (id, ruleId, e) => {
    this.props.handleParaChange(id, ruleId, e.target.value);
  }

  render(){

    const { classes } = this.props;

    return (
      <div>
        <ListItem>
        <TextField
          select
          value = {this.props.ruleObj.name}
          className={classes.textField}
          onChange={(e) => this.props.handleChangeRule(this.props.ruleIndex, e)}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {
            streamGenMenu.map(option => 
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
            )
          }
        </TextField>
        {
          // TODO: Add different input form for different stream generator
        }
        
        <IconButton onClick = {this.props.handleCross}>
            <CloseIcon />
        </IconButton>
        </ ListItem>
      </div>
    )

  }

}

export default withStyles(styles)(Rule);